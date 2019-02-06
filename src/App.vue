<template>
  <div id="app">
    <keep-alive><!-- 被该标签包裹的，如果要加载的内容请求数据在本地，就直接在本地提取数据，如果没就向服务器请求 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
