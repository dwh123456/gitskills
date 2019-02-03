<template>
    <ul class="list">
        <li class="item" v-for="(item, key) of cities" :key="key">{{key}}</li>
        
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
       cities: Object 
    },
    data () {
        return {
            listA: ['a','b','c','d','e','f','g','h','i','g','h','l','m','n','o','p','q','s','y','j','u','v','w','x','y','z']
        }
    }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .list
        position: fixed 
        top: 1.58rem
        right: 0
        //z-index: 666
        //left: 7rem
        bottom: 0
        width: .4rem
        display: flex
        flex-direction: column
        justify-content: center
        .item
            text-align: center
            padding-top: .1rem
            font-size: .3rem
            color: $bgColor
</style>


