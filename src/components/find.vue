<template>
  <div class="find">
    <Carousel></Carousel>
    <Bottom></Bottom>
  </div>
</template>
<script>
import Carousel from "@/components/find/carousel";
import Bottom from "@/components/home/Bottom";

export default {
  name: 'find',
  components: {Carousel, Bottom},
  data() {
    return {
      items:[]
    }
  },
  mounted(){

  },
  methods: {

  }
}
</script>
<style scoped>

</style>
