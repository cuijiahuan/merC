<template>
  <div class="recommend">
    <div class="title">推荐商品</div>
    <div class="content">
      <div class="content_iten" v-for="(item,index) in items" :key="index">
        <img src="../assets/person.jpg" alt="" width="450px" height="700px">
        <p class="name">高端什么什么衣服</p>
        <div class="desc">
          <span class="price">￥100</span>
          <span class="price_pre">￥150</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'recommend',
  data() {
    return {
      items: [1,2,3]
    };
  },
  mounted() {

  }
}
</script>

<style lang="less" scoped>
  .recommend{
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
      .content_item {
        .desc {
          .price {
            color: red;
            font-size: 18px;
          }
          .price_pre {
            font-size: 15px;
            color: #ccc;
            text-decoration: line-through;
          }
        }
      }
    }
  }
</style>
