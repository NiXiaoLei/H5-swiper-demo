<template>
  <div class="container">
    
    <img class="logo" src="../assets/index/logo.png" alt="">
    <img class="loading" src="../assets/index/loding.png" alt="">
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.container{
  height: 100%;
  background: url('../assets/index/bg.png') no-repeat;
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
  }


  

}
</style>
