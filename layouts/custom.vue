<template>
  <div class="main">
    <div class="header">
      <div class="header-content">
        <layout-header></layout-header>
        <layout-tooler></layout-tooler>
      </div>
    </div>
    <div class="content">
      <div class="content_nav">
        <layout-nav></layout-nav>
      </div>
      <div class="content_main">
        <banner></banner>
        <slot />
      </div>
      <div class="content_aside">
        <layout-aside></layout-aside>
        <layout-type></layout-type>
      </div>
    </div>
    <div class="footer">
      <layout-footer></layout-footer>
    </div>
  </div>
</template>
<script lang='ts' setup>
</script>
<style lang='scss' scoped>
.main {
  padding-top: 70px;
  .header {
    height: 60px;
    background-color: red;
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    .header-content {
      width: 1050px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .content {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1050px;
    margin: 0 auto;
    .content_nav {
      width: 160px;
      height: auto;
      order: 1;
      flex-shrink: 0;
      margin-right: 1.236rem;
    }
    .content_main {
      order: 2;
      flex-grow: 1;
      position: relative;
      overflow: hidden;
      transition: none;
    }
    .content_aside {
      display: block;
      padding: 0;
      width: 266px;
      order: 3;
      flex-shrink: 0;
      margin-left: 1.236rem;
    }
  }
  .footer {
    height: 80px;
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
} 
</style>
