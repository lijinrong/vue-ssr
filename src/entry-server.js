/*
 * @Author: lijinrong
 * @Date: 2020-04-16 21:18:12
 * @LastEditors: lijinrong
 * @LastEditTime: 2020-04-17 15:35:58
 * @Description: file content
 */
import createApp from './main.js'

export default (context) => {
    return new Promise((reslove, reject) => {
        let { url } = context
        let { app, router } = createApp(context)
        router.push(url)
        router.onReady(() => {
            let matchedComponents = router.getMatchedComponents()
            if (!matchedComponents.length) {
                return reject({
                    code: 404,
                })
            }
            reslove(app)
        }, reject)
    })
}
