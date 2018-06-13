<template>
  <div class="myHeader">
    <img src="../assets/panda.png" width="80px" height="80px">
    <span>Small Store</span>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .myHeader{
    width:100%;
    height:80px;
    background-color:#ccc;
  }
  .myHeader img{
    border-radius:50%;
    vertical-align:middle;
    margin-right:20px;
  }
  .myHeader span{
    display:inline-block;
    vertical-align:middle;
    font-size:35px;
    color:#fff;
  }
</style>
