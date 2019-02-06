<template>
   <div>
     <home-header ></home-header>
     <home-swiper :list='swiperList'></home-swiper>
     <home-icons :iconList='iconList'></home-icons>
     <home-recommend :recommendList='recommendList'></home-recommend>
     <home-weekend :weekendList='weekendList'></home-weekend>
   </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import { mapState } from 'vuex'

import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
      return {
        lastCity,
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      /*在用静态文件夹static时，有时要模拟后台数据，
      但又不想在在项目上线前来改动ajax的请求地址，
      可以在config/index.js中的proxyTable对象配置项中添加代理*/
      axios.get('/api/index.json?city=' + this.city) 
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if(res.ret && res.data) {
        const data = res.data
        //this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () { //activated生命周期函数 当页面重新被显示时，才执行
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>


<style lang="">


</style>