<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from "comp/home/home";

export default {
  name: 'app',
  mounted(){
 
  },
  data(){
    return {
      
    }
  },
  components: {
    Home
  }
}
</script>

<style>
* {
margin: 0px;
border: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
