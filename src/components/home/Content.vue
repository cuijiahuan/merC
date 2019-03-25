<template>
  <div class="Content">
    <ul>
      <li class="mid" v-for="item in items">
        <img v-lazy="item" alt="">
        <span>路人女主的养成方式</span>
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
//      ajax获取数据方法
//      getImage: function(){
//        $.ajax({
//          url:"//www.easy-mock.com/mock/5b76970cc88982363c8f989c/homeImg/getHomeImage",
//          dataType: "jsonp",
//          scriptCharset: "utf-8",
//          success: function(res){
//            console.log(res)
//          }
//        })
//      }

    },
    mounted() {
      //this.getImageData()
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
