<template>
  <div id="app" >
    <div class="wrap">
       <!-- <router-view/> -->
      <div class="swiper-wrapper">
        <Index class="swiper-slide"></Index>
        <Second class="swiper-slide"></Second>
        <Three class="swiper-slide"></Three>
      </div>
    </div>
   
  </div>
</template>

<script>
import Index from './components/Index'
import Second from './components/Second'
import Three from './components/Three'

export default {
  name: 'App',
  components: {
    Index,
    Second,
    Three
  },
  methods: {
    init () {

      const mySwiper = new Swiper('.wrap', {
        speed: 800,
        direction : 'vertical',
        mousewheel: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
         on:{
            init: function(){
              swiperAnimateCache(this); //隐藏动画元素 
              swiperAnimate(this); //初始化完成开始动画
            }, 
            slideChangeTransitionEnd: function(){ 
              swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            } 
          }
      })
    } 
  },
  mounted(){
    this.init()
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
.wrap {
  overflow: hidden;
  height: 100%;
}
</style>
