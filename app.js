var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
const fs = require('fs')
const logger = require('./common/logger').getLogger('app')
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
// var indexRouter = require('./routes/index')

const resolve = (file) => path.resolve(__dirname, file)

var app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/static', express.static(path.join(__dirname, 'dist')))

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template: fs.readFileSync(resolve('./public/index.html'), 'utf-8'),
    clientManifest: clientManifest,
})

function renderToString(context) {
    return new Promise((resolve, reject) => {
        renderer.renderToString(context, (err, html) => {
            err ? reject(err) : resolve(html)
        })
    })
}
// 添加一个中间件来处理所有请求
app.get('*', async (req, res, next) => {
    logger.info('request path: ', req.url)
    const context = {
        url: req.url,
    }
    // 将 context 数据渲染为 HTML
    const html = await renderToString(context)
    res.send(html)
    res.end()
})

module.exports = app
