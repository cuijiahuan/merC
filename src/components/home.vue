<template>
  <div class="home">
    <Top></Top>
    <Content :items='items'></Content>
    <Content></Content>
    <Bottom></Bottom>
  </div>
</template>
<script>
import Top from "@/components/home/Top"
import Content from "@/components/home/Content"
import Bottom from "@/components/home/Bottom"
import axios from "axios"
export default {
    name:"home",
    components: { Top, Content, Bottom, },
    data() {
      return {
        items:[]
      };
    },
    mounted(){
      this.getImageData();
    },
    methods:{
    //axios获取数据方法
      getImageData() {
        var that = this;
        axios.get("/api/index.json").then(function(res){
          // console.log(res.data.homeContent);
          that.items = res.data.homeContent;
        })
      }
    }
  }
</script>
