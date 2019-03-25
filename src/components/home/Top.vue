<template>
  <div class="Top">
    <div class="left">
      <span>{{ currentYear }}年{{ currentMonth }}月{{ currentDay }}日</span>
      <span>星期{{ currentWeek }}</span>
    </div>
    <div class="right">
      <img src="../../assets/logo.png">
    </div>
    <!--<div>{{msg}}</div>-->
  </div>
</template>
<script>
  export default{
    name:"Top",
    data(){
      return {
        msg:"",
        currentYear:"2018",
        currentMonth: "7",
        currentDay: "30",
        currentWeek: "一"
      }
    },
    methods:{
      initData: function(cur) {
        var date = new Date();
        this.currentDay = date.getDate();
        this.currentYear = date.getFullYear();
        this.currentMonth = date.getMonth() + 1;
        this.currentWeek = date.getDay(); // 1...6,0
        var weekArray=["日","一","二","三","四","五","六"];
        for(var i=0;i<7;i++){
          if(this.currentWeek==i){
            this.currentWeek=weekArray[i];
          }
        }
      }
    },
    mounted(){
      this.initData();
    }
  }
</script>
<style lang="less" scoped>
  .Top{
    height: 75px;
    display: flex;
    justify-content: space-around;
  }
  .left{
    font-size: 20px;
    line-height: 75px;
    letter-spacing: 2px;
  }
  .right{
    vertical-align: middle;
  }
</style>
