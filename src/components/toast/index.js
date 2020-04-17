/*
 * @Author: lijinrong
 * @Date: 2020-04-03 16:45:39
 * @LastEditors: lijinrong
 * @LastEditTime: 2020-04-03 16:46:11
 * @Description: file content
 */
import toast from './toast'

 export default {
	install: (Vue) => {
		const toastGenerator = Vue.extend(toast)
		let toastInstance
		const init = () => {
			if(!toastInstance) {
				toastInstance = new toastGenerator()
				var el = toastInstance.$mount().$el
				document.body.append(el)
			}
		}
		Vue.prototype.$toast = (text, timeOut) => {
			init()
			if(!toastInstance.show) {
				toastInstance.open(text, timeOut)
			}
		}
	}
}
