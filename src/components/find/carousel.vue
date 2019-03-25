<template>
  <div class="carousel">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide><img src="../../assets/c1.jpg"></swiper-slide>
      <swiper-slide><img src="../../assets/c2.jpg"></swiper-slide>
      <swiper-slide><img src="../../assets/c3.jpg"></swiper-slide>
      <swiper-slide><img src="../../assets/c4.jpg"></swiper-slide>
      <swiper-slide><img src="../../assets/c5.jpg"></swiper-slide>
      <swiper-slide><img src="../../assets/c6.jpg"></swiper-slide>

      <swiper-slide v-for="item in items" :key="item in items">
        <img :src="item.img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="div">{{ msg }}</div>
  </div>
</template>
<script>
  import "swiper/dist/css/swiper.css";
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  export default {
    name: 'carousel',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        msg:"",
        items:[],
        swiperOption: {
          pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          }
        }
      };
    },
    methods:{
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {
      // console.log("this is current swiper instance object",this.swiper);
      this.swiper.slideTo(3,1000,false);
      //this.ajax()
    }
  };
</script>
<style scoped>
  .carousel{
    width:100%;
    height:400px;
  }
  img{
    width:100%;
    height:400px;
  }
</style>
