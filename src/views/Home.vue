<template>
  <main class="home">
    <h1>
      {{message}}
    </h1>
  </main>
</template>

<script>

export default {
  name: 'home',
  data(){
    return{
      message:"Welcome to Puby's Portfolio"
    }
  }
}
</script>

<style scoped>

.home{
  --main-bg-color:#F3F1C3;
  width:max;
  height:88vh;
  /*Firefox,webkit,その他向け*/
  background: -moz-linear-gradient(top, white, var(--main-bg-color));
  background: -webkit-linear-gradient(top, white, var(--main-bg-color));
  background: linear-gradient(to bottom, white, var(--main-bg-color));
  position:relative;
}
h1{
  margin-left:10%;
  color: black;
  font-size:50px;
  position:absolute;
  top:0;
  bottom:0;
  right:0;
  left:0;
  margin:auto;
  margin-top:15%
}
</style>
