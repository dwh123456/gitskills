<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for='(page, index) of pages' :key='index'>
                <div class="icon" v-for='item of page' :key='item.id'>
                    <div class="icon-img" >
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                        <p class="icon-desc">{{item.desc}}</p>
                    </div>
                </div>
            </swiper-slide>
            
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props: {
        iconList: Array
    },
    data () {
        return {
            swiperOption: {
                autoplay: false //让轮播停止自动轮播
            }
        }
    },
    computed: {
        pages () {
            const pages = [];
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index/8);
                if(!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .icons >>> .swiper-container
        overflow hidden
        height: 0
        padding-bottom: 50%
    .icon
        position: relative
        overflow hidden
        float: left
        width: 25%
        height: 0
        padding-bottom: 25%
        .icon-img
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            box-sizing: border-box
            padding: .1rem
            .icon-img-content
                display: block
                margin: 0 auto
                height: 100%
        .icon-desc
            position: absolute
            left: 0
            right:0
            bottom: -.4rem
            height: .44rem
            line-height: .44rem
            text-align: center
            color: $darkTextColor
            /* overflow hidden
            text-overflow: ellipsis
            white-space: nowrap */
            //上面三个替换成自己封装的
            ellipsis()

    
</style>

