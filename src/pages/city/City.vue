<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities"></city-list>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'

export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList
    },
    data () {
        return {
            cities: {},
            hotCities: []
        }
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json')
                .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc (res) {
            //console.log(res)
            res = res.data
            //console.log(res)
            if(res.ret && res.data) {
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
            
        }
    }, 
    mounted () {
        this.getCityInfo()
    }
}
</script>

<style lang='stylus' scoped>

</style>



