<template>
    <div class="container" @click='handelGallaryClick'>
        <div class="container-item">
            <swiper :options='swiperOptions'>
                <!-- slides  ref="mySwiper" @someSwiperEvent="callback"-->
                <swiper-slide v-for="(item, index) of imgs" :key='index'>
                    <img class="gallary-img" :src="item" alt="">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props: {
        imgs: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data() {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observeParents: true, 
                observer: true //observeParents和observer两个属性表示当dom结构发生变化时，就轮播就自动刷新一遍
            }
        }
    },
    methods: {
        handelGallaryClick() {
            this.$emit('close')
        }
    }
}
</script>

<style lang='stylus' scoped>
    .container >>> .swiper-container
        overflow inherit
    .container
        display: flex
        flex-direction: column
        justify-content: center
        z-index: 99
        position: fixed
        left: 0
        right: 0
        top: 0
        bottom: 0
        background: #000
        .container-item
            
            height: 0
            width: 100%
            padding-bottom: 100%
            background: #fff
            .gallary-img
                display: block
                width: 100%
            .swiper-pagination
                color: #ffffff
                bottom: -1rem
</style>
