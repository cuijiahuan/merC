<template>
  <div class="home">
    <my-header></my-header>
    <content></content>
  </div>
</template>
<script>
import axios from 'axios'
import MyHeader from "@/components/myHeader";
import Content from '@/components/content';
// import Carousel from "@/components/carousel";
// import Activity from "@/components/activity";
// import Recommend from "@/components/recommend";
// import Calendar from "@/components/calendar";
export default {
    name:"home",
    components: { MyHeader, Content },
    data() {
      return {
        msg:"hello vue"
      };
    },
  mounted(){
    this.getIndexData();
  },
    methods:{
      getIndexData(){
        axios.get("/api/index").then(res => {
          let data = res.data;
          console.log(data);
        })
      }
    }
  }
</script>
