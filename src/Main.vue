<template>
  <div class="swiper-container">
    <router-view />
    <div class="swiper-wrapper">
      <div class="swiper-slide"><Second></Second></div>
      <div class="swiper-slide"><Three></Three></div>
    </div>
  </div>
</template>

<script>
import Second from "./components/Second";
import Three from "./components/Three";

export default {
  name: "App",
  components: {
    Second,
    Three
  },
  methods: {
    init() {
      const mySwiper = new Swiper(".swiper-container", {
        speed: 500,
        direction: "vertical",
        autoHeight: true,
        // mousewheel: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        on: {
          init: function() {
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function() {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          }
        }
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss" >
*{
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%; 
}


.swiper-container{
  overflow: hidden;
  height: 100%;
}
</style>
