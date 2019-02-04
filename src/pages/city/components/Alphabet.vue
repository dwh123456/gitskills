<template>
    <ul class="list">
        <li class="item" 
            v-for="item of letters" 
            :key="item"
            :ref='item'
            @click='handleLetterClick'
            @touchstart='handleTouchStart'
            @touchmove='handleTouchMove'
            @touchend='handleTouchEnd'>{{item}}</li>
        
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
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    computed: {
        letters () {
            const letters = []
            for(let i in this.cities) {
                letters.push(i)
            }
            return letters;
        }
    },
    updated() {
        this.startY = this.$refs['A'][0].offsetTop
        console.dir(this.$refs['A'][0] )
    },
    methods: {
        handleLetterClick(e) {
            this.$emit('change', e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if(this.touchStatus) {
                if(this.timer) {
                    clearTimeout(this.timer) //节流
                }
                this.timer = setTimeout( () => { //节流
                    //const startY = this.$refs['A'][0].offsetTop;
                    const touchY = e.touches[0].clientY - 81
                    const index = Math.floor((touchY - this.startY)/19.4);
                    if(index >=0 && index< this.letters.length) {
                        this.$emit('change', this.letters[index])
                    }
                })
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
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


