<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
            <!-- slides  ref="mySwiper" @someSwiperEvent="callback"-->
            <swiper-slide v-for='item of list' :key='item.id'>
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true //让轮播插件支持循环轮播
            }
        }
    }
}
</script>

<style lang='stylus' scoped>
    .wrapper >>> .swiper-pagination-bullet-active //进行样式穿透（当wrapper下面出现swiper-pagination-bullet-active就让他们都变成下面的样式）
            background-color: #fff !important 
    .wrapper
        overflow hidden
        width: 100%
        height: 0
        padding-bottom: 31.2%
        background-color: #ccc
        .swiper-img
            width: 100%
        //.swiper-pagination
            
</style>


