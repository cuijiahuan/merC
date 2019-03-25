<template>
  <div class="Bottom">
    <div class="bot"></div>
    <div class="bottom">
      <div class="home" @click="home()">
        <img src="../../assets/index.png">
        <span>首页</span>
      </div>
      <div class="find" @click="find()">
        <img src="../../assets/find.png">
        <span>发现</span>
      </div>
      <div class="video" @click="video()">
        <img src="../../assets/video.png">
        <span>其他</span>
      </div>
      <div class="me" @click="me()">
        <img src="../../assets/me.png">
        <span>我的</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:"Bottom",
    data(){
      return{

      }
    },
    methods:{
      home: function(){
        this.$router.push({
          path: '/',
          query:{
            id: 233
          }
        })
      },
      find: function(){
        this.$router.push({path: '/find'})
      },
      video: function(){
        this.$router.push({path: '/other'})
      },
      me: function(){
        this.$router.push({path: '/me'})
      }
    },
    mounted(){

    }
  }
</script>
<style scoped>
  .bot{
    height:80px;
  }
  .bottom{
    width:100%;
    height:75px;
    padding-top: 10px;
    background: #fff;
    position: fixed;
    bottom:0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .home, .find, .video, .me{
    width:50px;
    height:100%;
  }
  .bottom img{
    width: 40px;
    height: 40px;
  }
  .bottom span{
    font-size:20px;
  }
</style>
