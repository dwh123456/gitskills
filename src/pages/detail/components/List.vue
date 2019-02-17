<template>
    <div>
        <div class="item" v-for='(item, index) of list' :key='index'>
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>

            <!-- 使用递归，遍历自己 -->
            <div class="list-children" v-if='item.children'>
                <!-- 当item.children条件为真时，就去请求自己（也就是name为detail-list），将其渲染到页面中 -->
                <detail-list :list='item.children'></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailList',//用于递归
        props: {
            list: Array
        }
    }
</script>

<style lang='stylus' scoped>
    .item-title
        line-height: .8rem
        font-size: .32rem
        padding: 0 .2rem
        .item-title-icon
            position: relative
            left: .06rem
            top: 0.06rem
            display: inline-block
            width: .36rem
            height: 0.36rem
            background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
            margin-right: .1rem
            background-size: .4rem 3rem
    .list-children
        margin-left: .12rem
</style>