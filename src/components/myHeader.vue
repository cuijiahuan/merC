<template>
  <div class="myHeader">
    <div class="header">
      <div class="logo"><img src="../assets/logo.png"></div>
      <div class="date">{{ currentMonth }} 月 {{ currentDate }} 日</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style lang="less" scoped>
  .myHeader{
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #000;
    background-color: transparent;
    .header{
      width: 100%;
      display: flex;
      justify-content: space-around;
      .logo{
        width: 75px;
        height: 75px;
      }
      .date{
        color:#aaa;
        line-height: 75px;
        font-size: 25px;
      }
    }
  }
</style>
