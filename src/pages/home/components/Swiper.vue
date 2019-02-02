<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
            <!-- slides  ref="mySwiper" @someSwiperEvent="callback"-->
            <swiper-slide v-for='item of swiperList' :key='item.id'>
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
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true //让轮播插件支持循环轮播
            },swiperList: [{
                id: '0001',
                imgUrl: '//dimg04.c-ctrip.com/images/700p11000000q8vvaF87A_1242_470_191.jpg'
            },{
                id: '0002',
                imgUrl: '//dimg04.c-ctrip.com/images/700510000000q9gcn0CD4_1242_470_191.jpg'
            }]
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
        padding-bottom: 37.84%
        background-color: #ccc
        .swiper-img
            width: 100%
        //.swiper-pagination
            
</style>


