<template>
  <div class="carousel">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide><img src="../assets/pic1.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/pic2.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/pic3.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/pic4.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/pic5.jpg"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
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
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    console.log("this is current swiper instance object",this.swiper);
    this.swiper.slideTo(3,1000,false);
  }
};
</script>

<style scoped>
  .carousel{
    width:100%;
    height:400px;
  }
  .carousel img{
    width:100%;
    height:400px;
  }
</style>
