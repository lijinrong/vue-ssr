/*
 * @Author: lijinrong
 * @Date: 2020-04-16 21:17:46
 * @LastEditors: lijinrong
 * @LastEditTime: 2020-04-17 13:04:28
 * @Description: file content
 */
import createApp from './main.js'
let { app, router } = createApp({})

router.onReady(() => {
    app.$mount('#app', true)
})
