<template>
  <div class="activity">
    <div class="title">活动推荐</div>
      <div class="content">
        <div class="content_item" v-for="(item,index) in items" :key="index">
          <img src="../assets/pic1.jpg" alt="">
          <p class="name">品牌:Hxx-Luxury Store</p>
          <p class="desc">这是一个秋季发布的什么很好的品牌</p>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "activity",
  data() {
    return {
      items: [1,2]
    };
  },
  mounted() {

  }
}
</script>

<style lang="less" scoped>
  .activity{
    background:#fff;
    .title{
      margin:5px 0;
      font-size:20px;
      color:#ccc;
    }
    .content{
      display: -webkit-flex;
      display:flex;
      flex-wrap: wrap;
      justify-content: space-between;
      img{
        width:770px;
        height:300px;
      }
    }
  }
</style>
