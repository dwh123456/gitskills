<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for='item of recommendList' :key='item.id'>
                <img class='item-img' :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.itemTitle}}</p>
                    <p class="item-desc">{{item.itemDesc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data () {
        return {
            recommendList: [{
                id: '0001',
                imgUrl: 'https://dimg03.c-ctrip.com/images/100t10000000pgpli07B8_C_300_200.jpg',
                itemTitle: '我是闰年v额v范围我是闰年v额v范围我是闰年v额v范围',
                itemDesc: '我是闰年v额v范围'
            },{
                id: '0002',
                imgUrl: 'https://dimg03.c-ctrip.com/images/100t10000000pgpli07B8_C_300_200.jpg',
                itemTitle: '我是闰年v额v范围我是闰年v额v范围我是闰年v额v范围',
                itemDesc: '我是闰年v额v范围'
            },{
                id: '0003',
                imgUrl: 'https://dimg03.c-ctrip.com/images/100t10000000pgpli07B8_C_300_200.jpg',
                itemTitle: '我是闰年v额v范围我是闰年v额v范围我是闰年v额v范围',
                itemDesc: '我是闰年v额v范围'
            },{
                id: '0004',
                imgUrl: 'https://dimg03.c-ctrip.com/images/100t10000000pgpli07B8_C_300_200.jpg',
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
        flex-direction:column
        padding: .1rem
        //height: 1.9rem
        margin-bottom: .1rem
        .item-img
            //width: 100%
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

