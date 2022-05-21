<template>
  <div>
    <ul>
      <li>首页</li>
      <li>分类</li>
      <li>归档</li>
      <li>关于</li>
    </ul>
  </div>
</template>
<script lang='ts' setup>
</script>
<style lang='scss' scoped>
ul {
  li {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 40px;
    margin-bottom: 4px;
    padding: 10px;
    text-decoration: none;
    letter-spacing: .5px;
    cursor: pointer;
    will-change: background-color;
    transition: background-color .06s;
    border-radius: 4px;
    overflow: hidden;
    &:hover {
      background-color: #0088f5cc;
    }
  }
}
</style>
