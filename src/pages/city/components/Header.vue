<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont heider-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .header
        //overflow: hidden
        position relative
        height: .86rem
        line-height: 0.86rem
        text-align: center
        color: #fff
        font-size: 0.32rem
        background: $bgColor
        .heider-back
            position: absolute
            top: 0
            left: 0
            width: .64rem
            text-align: center
            font-size: .4rem
            color: #fff
</style>



