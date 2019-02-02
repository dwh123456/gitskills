<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for='item of recommendList' :key='item.id'>
                <img class='item-img' :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.itemTitle}}</p>
                    <p class="item-desc">{{item.itemDesc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            recommendList: [{
                id: '0001',
                imgUrl: 'https://youimg1.c-ctrip.com/target/fd/tg/g2/M06/27/6B/CghzgVWsuQuAZfxFABkFIaVqO94008_C_100_100_Q90.jpg',
                itemTitle: '我是闰年v额v范围我是闰年v额v范围我是闰年v额v范围',
                itemDesc: '我是闰年v额v范围'
            },{
                id: '0002',
                imgUrl: 'https://youimg1.c-ctrip.com/target/fd/tg/g2/M06/27/6B/CghzgVWsuQuAZfxFABkFIaVqO94008_C_100_100_Q90.jpg',
                itemTitle: '我是闰年v额v范围我是闰年v额v范围我是闰年v额v范围',
                itemDesc: '我是闰年v额v范围'
            },{
                id: '0003',
                imgUrl: 'https://youimg1.c-ctrip.com/target/fd/tg/g2/M06/27/6B/CghzgVWsuQuAZfxFABkFIaVqO94008_C_100_100_Q90.jpg',
                itemTitle: '我是闰年v额v范围我是闰年v额v范围我是闰年v额v范围',
                itemDesc: '我是闰年v额v范围'
            },{
                id: '0004',
                imgUrl: 'https://youimg1.c-ctrip.com/target/fd/tg/g2/M06/27/6B/CghzgVWsuQuAZfxFABkFIaVqO94008_C_100_100_Q90.jpg',
                itemTitle: '我是闰年v额v范围我是闰年v额v范围我是闰年v额v范围',
                itemDesc: '我是闰年v额v范围'
            }]
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
        height: 1.9rem
        margin-bottom: .1rem
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
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
                ellipsis()
            .item-button
                background: #ff9300
                // padding: .1rem
                border-radius: .06rem
                color: #fff
                width: 1.5rem
                // box-sizing: border-box
</style>

