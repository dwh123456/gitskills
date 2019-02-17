<template>
  <div id="app">
    <!-- 被该标签包裹的，如果要加载的内容请求数据在本地，就直接在本地提取数据，如果没就向服务器请求 -->
    <!-- exclude表示选择不缓存的组件, Detail组件不会被缓存 -->
    <!-- 不会缓存的页面，每次进入页面时moutend生命钩子函数就会被执行 -->
    <keep-alive exclude="Detail">
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
