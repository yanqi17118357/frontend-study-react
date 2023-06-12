const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
	app.use(
		createProxyMiddleware('/api1', { // 遇见api1的请求，触发该代理配置
			// 请求转发给谁
			target: 'http://localhost:5000',
			// 控制服务器收到的请求头中Host字段的值
			changeOrigin: true,
			pathRewrite: {'^/api1':''}
		})
	)
}
