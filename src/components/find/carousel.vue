<template>
  <div class="carousel">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in items" :key="index">
        <a href="#"><img :src="item"></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  import "swiper/dist/css/swiper.css";
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import axios from "axios"
  export default {
    name: 'carousel',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
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
      getImageData() {
        var that = this;
        axios.get("/api/index.json").then(function(res){
          // console.log(res.data.findCarousel);
          that.items = res.data.findCarousel;
        })
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {
      this.getImageData();
      this.swiper.slideTo(3,1000,false);
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
