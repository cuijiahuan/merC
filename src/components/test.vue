<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">
      <i style="font-size:20px" class="el-icon-loading"></i>
      调度器平台
    </el-menu-item>
    <el-menu-item index="2">任务管理</el-menu-item>


  </el-menu>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
  .el-menu--horizontal>.el-menu-item.is-active, .el-menu--horizontal>.el-menu-item{
    border-bottom: none;
    color: #000;
    font-size: 20px;
    margin-left:70px;
  }

  .tac{

  }
</style>
