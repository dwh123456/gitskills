<template>
   <div class="header">
      <div class="header-left ">
          <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          输入城市/景点/游玩主题
        </div>
      <div class="header-right">
          {{this.city}}<span class="iconfont arror-icon">&#xe64a;</span>
      </div>
   </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
      city: String
  }
}
</script>

<style lang="stylus"  scoped>
/* scoped 表示该样式只对当前组件生效 */
/* 引入全局的背景颜色 */
   /* @import '../../../assets/styles/varibles.styl'  */
    @import '~styles/varibles.styl'
    
  .header
    line-height: .86rem
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
        flex: 1
        background: #ffffff
        border-radius: .1rem
        margin-top: .12rem
        padding-left: .2rem
        height: .64rem
        line-height: .64rem
        margin-left: .2rem
        color: #ccc
    .header-right
        float: right
        width: 1.24rem
        text-align: center
        .arror-icon
            font-size: .24rem
            margin-left: .04rem
</style>