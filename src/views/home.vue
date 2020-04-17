<!--
 * @Author: lijinrong
 * @Date: 2020-04-16 21:07:51
 * @LastEditors: lijinrong
 * @LastEditTime: 2020-04-16 22:41:21
 * @Description: file content
 -->
<template>
    <div class="home">
        <h1 class="title">
            马来人pdf
        </h1>
        <div class="search-box">
            <input v-model="blog_url" type="text" placeholder="请输入博客网址" />
            <!-- <button class="my-btn">搜索</button> -->
        </div>
        <div class="reault-operate">
            <button class="my-btn" @click="handlePreview">预览</button>
            <button class="my-btn upload-btn" @click="handleDownload">下载</button>
        </div>
    </div>
</template>
<script>
import config from '../etc/config'
export default {
    data() {
        return {
            blog_url: '',
            counter: 0,
        }
    },
    methods: {
        handlePreview() {
            if (!this.blog_url) {
                this.$toast('请输入地址')
                return
            }
            window.open(config.api_url + '/blog/previewImage?blogUri=' + this.blog_url)
        },
        handleDownload() {
            if (!this.blog_url) {
                this.$toast('请输入地址')
                return
            }
            window.open(config.api_url + '/blog/downloadPdf?blogUri=' + this.blog_url)
        },
    },
}
</script>
>
<style lang="less" scoped>
.home {
    .title {
        font-size: 30px;
        font-weight: 100;
    }
    .search-box {
        margin-top: 60px;
        display: flex;
        justify-content: center;
        input {
            width: 500px;
            border: 1px solid #e5e5e5;
            height: 30px;
            text-indent: 0.5em;
            border-radius: 4px;
        }
    }
    .reault-operate {
        margin-top: 50px;
    }
    .upload-btn {
        margin-left: 20px;
    }
    .my-btn {
        height: 32px;
        line-height: 32px;
        width: 80px;
        background: none;
        border: 1px solid #e5e5e5;
    }
}
</style>
