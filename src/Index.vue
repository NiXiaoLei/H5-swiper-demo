<template>
  <div class="container">
    
    <img class="logo" src="./assets/index/logo.png" alt="">
    <img class="loading" src="./assets/index/loding.png" alt="">
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },

  mounted(){
    setTimeout(()=>{
      // this.$router.push('/main')
    }, 3000)
  }

}
</script>
<style lang="scss" scoped>

  // @keyframes loadigAction {
  //   0% {
  //       transform: scale(1.15, 1.15);
  //       opacity: 0;
  //   }
  //   50% {
  //       transform: scale(1.3, 1.3);
  //       opacity: 1;
  //   }
  //   100% {
  //       transform: scale(1.6, 1.6);
  //       opacity: 0;
  //   }
  // }


.container{
  height: 100%;
  background: url('./assets/index/bg.png') no-repeat;
  background-size: 100% 100%;
  position: relative;


  .logo{
    width: 450px;
    position: absolute;
    top: 45px;
    left: 60px;
  }

  .loading{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    // animation: loadigAction 2s infinite;
  }


  

}
</style>
