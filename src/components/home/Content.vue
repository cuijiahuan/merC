<template>
  <div class="Content">
    <ul>
      <li class="mid" v-for="(item, index) in items" :key="index">
        <img v-lazy="item" alt="">
        <span>another one </span>
        <el-button type="primary" round>立即进入</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    name:"Content",
    props: {
      items: {
        type: Array,
        default: ()=>[]
      }
    },
    data(){
      return {
      }
    },
    methods:{

    },
    mounted() {

    }
  }
</script>
<style scoped>
  ul{
    list-style: none;
    margin-right:30px;
  }
  .mid{
    height:650px;
    margin-top:15px;
    position:relative;
  }
  .mid img{
    width:100%;
    height:100%;
    border-radius:12px;
  }
  .mid img[lazy="loading"] {
    display: block;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .mid span{
    position: absolute;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 3px;
    top: 20px;
    left: 20px;
  }
  .mid .el-button{
    font-size: 20px;
    position: absolute;
    bottom: 20px;
    right: 30px;
  }
</style>
