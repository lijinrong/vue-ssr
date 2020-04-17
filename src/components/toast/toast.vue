<!--
 * @Author: lijinrong
 * @Date: 2020-04-03 15:35:58
 * @LastEditors: lijinrong
 * @LastEditTime: 2020-04-11 17:54:17
 * @Description: file content
 -->
<template>
    <transition name="fade">
        <div class="toast" v-show="show">
            <span v-text="text"></span>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            text: '测试',
            show: false,
            hideAnimate: false,
            tClass: '',
            timeOut: 2,
        }
    },
    created() {},
    methods: {
        open(text, timeOut = 2) {
            this.text = text
            this.timeOut = timeOut
            this.show = true
            setTimeout(() => {
                this.show = false
            }, (this.timeOut + 0.5) * 1000)
        },
    },
}
</script>

<style lang="less" scoped>
.toast {
    position: fixed;
    top: 80%;
    left: 50%;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 5px;
    border-radius: 3px;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
