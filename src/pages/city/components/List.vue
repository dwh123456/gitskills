<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="item of list" :key="item.id">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                </div>
            </div>
            
        </div>
        <city-alphabet></city-alphabet>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import CityAlphabet from './Alphabet.vue'
export default {
    name: 'List',
    data () {
        return {
            list: [{
                id: '0001'
            },{
                id: '0002'
            },{
                id: '0003'
            }]
        }
    },
    components: {
        CityAlphabet
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .list
        position: absolute
        overflow: auto
        top: 1.78rem
        //left: 0
        //right: 0
        width: 100%
        bottom: 0
    .title
        line-height: .54rem
        background:#eee
        padding-left: .2rem
        color: #666
        font-size: .26rem
    .button-list
        overflow hidden
        padding: .1rem .6rem .1rem .1rem
        .button-wrapper
            float: left 
            width: 33.33%
            .button
                margin: .1rem
                text-align: center
                border: .02rem solid #ccc
                padding: .1rem 0
                border-radius: .1rem
    .item-list
        padding-top:.1rem
        .item
            line-height: .54rem
            color: #666
            padding: .1rem .2rem
            
</style>


