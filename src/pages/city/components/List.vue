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
                    <div class="button-wrapper" 
                         v-for="item of hotCities" 
                         :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                    
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key='key' :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
                    
                </div>
            </div>
            
        </div>
        <city-alphabet :cities='cities' 
                        @change='handleLetteClick'></city-alphabet>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import CityAlphabet from './Alphabet.vue'
export default {
    name: 'List',
    props: {
        cities: Object,
        hotCities: Array
    },
    data () {
       return {
           letter: ''
       }
    },
    watch: {
        letter () {
            if(this.letter) {
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
                console.log(element)
                console.log(this.$refs[this.letter])
            }
            console.log(this.letter)
        }
    },
    components: {
        CityAlphabet
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    methods: {
        handleLetteClick(letter) {
            this.letter = letter
            console.log(letter)
        }
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


