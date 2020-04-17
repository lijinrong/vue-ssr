import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
import http from './utils/http'
import toast from './components/toast/index'

export default () => {
    Vue.config.productionTip = false
    Vue.prototype.$http = http
    Vue.use(toast)
    const router = createRouter()
    const app = new Vue({
        router,
        render: (h) => h(App),
    })

    return { app, router }
}
