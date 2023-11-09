import { randomInt, randomFloat } from "./random.js";

class Bubble {
  constructor(parent, positions, size, speed) {
    this.parent = parent;
    this.positions = positions;
    this.size = size;
    this.speed = speed;
    this.toDelete = false;
    this.randomDirection = randomFloat(-1, 1);
    this.lastDirection = new Date();
  }

  changeDirection() {
    const currentDirection = new Date();
    this.positions.x = this.positions.x += this.randomDirection;
    // Each second
    if((currentDirection - this.lastDirection) > 1000) {
      this.randomDirection = randomFloat(-1, 1);
      this.lastDirection = new Date();
    }
  }

  draw() {
    this.changeDirection();
    const toTop = Math.max(this.positions.y / (this.parent.settings.resolution * this.parent.settings.maxSize), 0);
    const leave = (this.positions.x > this.parent.settings.resolution + this.size)
      || (this.positions.x < -this.size);
    if(toTop<=0 || leave){
      this.toDelete = true;
      return;
    }
    this.positions.y = this.positions.y - this.speed;
    this.parent.ctx.beginPath();
    this.parent.ctx.arc(
      this.positions.x,
      this.positions.y - scrollY,
      this.size * toTop,
      0,
      2 * Math.PI
    )
    this.parent.ctx.fillStyle = this.parent.settings.colorBubble;
    this.parent.ctx.fill();
    this.parent.ctx.closePath();
  }
}

class Soda {
  constructor(selector) {
    this.selector = selector;
    this.ctx = this.selector.getContext("2d");
    this.bubbles = [];
    this.lastFrame = new Date();
    this.settings = {
      resolution:1500,
      maxSize: undefined,
      maxBubbles: 150,
      minBubbleSize:10,
      maxBubbleSize:50,
      minBubbleSpeed:3,
      maxBubbleSpeed:5,
      colorBubble: "rgba(3, 252, 248,0.16)"
    }

    this.setMaxSize()
    this.setStyle();
    this.generateBubbles(this.settings.maxBubbles, true);
    this.update();
  }

  setStyle() {
    this.selector.style.width = "101vw";
    this.selector.style.height = "101vh";
    this.selector.style.position = "fixed";
    this.selector.style.top = "-.5vh";
    this.selector.style.left = "-.5vw";
    this.selector.style.objectFit = "cover";
    this.selector.style.pointerEvents = "none";
    this.selector.style.zIndex = "0";
    this.selector.width = this.settings.resolution;
    this.selector.height = this.settings.resolution;
  }

  setMaxSize() {
    const documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    const maxSize =  Math.max(1, Math.ceil(documentHeight / this.settings.resolution));
    this.settings.maxSize = maxSize;
    return maxSize;
  }

  generateBubbles(number = 1, onScreen=false) {
    const fullResolution = this.settings.resolution * this.settings.maxSize;
    for (const i of Array(number).keys()) {
      const xMin = 0;
      const xMax = this.settings.resolution;
      const yMin = onScreen ? 0 : fullResolution;
      const yMax = fullResolution + (this.settings.maxBubbleSize * 2);
      const bubble = new Bubble(
        this,
        {
          x: randomInt(xMin, xMax),
          y: randomInt(yMin, yMax)
        },
        randomInt(this.settings.minBubbleSize, this.settings.maxBubbleSize),
        randomInt(this.settings.minBubbleSpeed, this.settings.maxBubbleSpeed)
      )
      this.bubbles.push(bubble);
    }
  }

  removeBubbles() {
    let deleted = 0;
    const bubbles = this.bubbles.filter((bubble) => {
      if(!bubble.toDelete) {
        return bubble;
      }else {
        deleted ++;
      }
    });
    this.bubbles = bubbles;
    this.generateBubbles(deleted);
  }

  update() {
    const newFrame = new Date();
    const deltaFrame = newFrame - this.lastFrame;
    // 24 images per second
    if(deltaFrame >= 24) {
      this.frame();
      this.lastFrame = new Date();
    }
    window.requestAnimationFrame(()=>{
      this.update();
    });
  }

  frame() {
    this.removeBubbles();
    this.setMaxSize();
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.selector.width, this.selector.height);
    this.bubbles.forEach((bubble) => {
      bubble.draw();
    });
  }
}

export default function () {
  const selector = document.querySelector("#canvas-soda");
  const soda = new Soda(selector);
}
