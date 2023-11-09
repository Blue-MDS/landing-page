import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setupProxy() {
  const proxy = createProxyMiddleware({
    target: 'http://api.sendinblue.com',
    changeOrigin: true,
    pathRewrite: {
      '^/v3': '/v3'
    }
  });

  return {
    middlewares: [
      (req, res, next) => {
        proxy(req, res, next);
      }
    ]
  };
}