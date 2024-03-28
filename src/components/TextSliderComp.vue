<template>
  <div class="container py-4">
    <div class="horizontal-scrolling-items">
      <div class="horizontal-scrolling-items__item text-uppercase font-weight-medium">
        {{ concatenatedItemsText }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const items = ref([
  { id: 1, text: 'Sans sucre - ' },
  { id: 2, text: 'Sans colorant - ' },
  { id: 3, text: 'Sans addictif - ' },
  { id: 4, text: 'Made in France - ' },
  { id: 5, text: 'À base d’ingrédients naturels - ' },
]);

const concatenatedItemsText = computed(() => {
  return items.value.map(item => item.text).join('') + items.value.map(item => item.text).join('');
});
</script>

<style lang="scss" scoped>
@keyframes infiniteScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.container {
  width: 100%;
  overflow-x: hidden;
  border-style: solid;
  border-color: $gold;
}

.horizontal-scrolling-items {
  display: flex;
  font-size: 24px;
  animation: infiniteScroll 20s linear infinite;
}

.horizontal-scrolling-items__item {
  white-space: nowrap;
}
</style>
