<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for='item of weekendList' :key='item.id'>
                <div class='item-img'>
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        weekendList: Array
    },
    data () {
        return {
            
        }
    }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/mixins.styl'
    .title
        margin-top: .2rem
        line-height: .4rem
        background: #eee
        text-inden: .2rem
    .item
        display: flex
        flex-direction:column
        padding: .1rem
        //height: 1.9rem
        margin-bottom: .1rem
        .item-img
            //width: 100%
            overflow hidden
            padding-bottom: 37.09%
            height: 0
        .item-info
            flex: 1
            padding: .1rem
            min-width: 0 //解决子元素ellipsis()无效
            display: flex
            flex-direction: column
            justify-content:space-around
            .item-title
                font-size: .32rem
                ellipsis()
            .item-desc
                color: #ccc
                padding-top: .1rem
                ellipsis()
</style>

