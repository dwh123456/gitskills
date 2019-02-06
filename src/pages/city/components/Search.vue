<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type='text' placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" 
                    v-for='item of list' 
                    :key='item.id'
                    @click='handleCityClick(item.name)'>{{item.name}}</li>
                <li class="search-item border-bottom" v-show='hasNoData'>没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'Search',
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null,

        }
    },
    methods: {
        handleCityClick(city) {
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations (['changeCity'])//在mapMutations中我们有一个changeCity方法，如果要转发内容就直接调用这个方法，this.changeCity(city)
    },
    computed: {
        hasNoData () {
           return !this.list.length
        },
        ...mapState({
            currentCity: 'city' //把vuex中的city属性映射到currentCity对象中
        })
    },
     watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout( () => {
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    })
                }
                this.list = result
                console.dir(result)
            },100)
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .search
        background: $bgColor
        height: .72rem
        padding: .1rem
        line-height: .72rem
        .search-input
            box-sizing: border-box
            width: 100%
            border-radius: .06rem
            padding: 0 .1rem
            height: .62rem
            line-height: .62rem
            color: #666
    .search-content
        position: absolute 
        z-index: 1
        overflow hidden
        top: 1.78rem
        left: 0
        right: 0
        bottom: 0
        background: #eee
        overflow auto
        .search-item
            font-size: .28rem
            line-height: 0.54rem
            padding-left: .2rem
            color: #666
            background: #fff
</style>

