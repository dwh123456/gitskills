<template>
   <div class="header">
      <div class="header-left ">
          <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          输入城市/景点/游玩主题
      </div>
      <router-link to="/city">
        <div class="header-right">
            {{this.city}}<span class="iconfont arror-icon">&#xe64a;</span>
        </div>
      </router-link>
   </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader'
  /* ,
  props: {
      city: String
  } */
  ,
  computed: {
      ...mapState(['city']) //把vuex中的city数据映射到这个计算属性中
  }
}
</script>

<style lang="stylus"  scoped>
/* scoped 表示该样式只对当前组件生效 */
/* 引入全局的背景颜色 */
   /* @import '../../../assets/styles/varibles.styl'  */
    @import '~styles/varibles.styl'
    
  .header
    line-height: .87rem
    display: flex
    background: $bgColor //使用全局的背景颜色
    color: #fff
    .header-left
        width: .64rem
        float: left
        .back-icon
            text-align: center
            font-size: .4rem
    .header-input
        flex: 2
        background: #ffffff
        border-radius: .1rem
        margin-top: .12rem
        padding-left: .2rem
        height: .64rem
        line-height: .64rem
        margin-left: .2rem
        color: #ccc
    .header-right
        color: #fff
        float: right
        //width: 1.24rem
        //flex: 1
        padding: 0 .07rem
        text-align: center
        .arror-icon
            font-size: .24rem
            margin-left: .04rem
</style>