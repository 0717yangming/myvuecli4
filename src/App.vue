<template>
  <div id="app">
      <Head _width="1263.5px"></Head>
    <router-view></router-view>
   
  </div>
</template>

<script>
// import Home from "comp/home/home";
import Head from 'comp/head/head'
export default {
  name: 'app',
  mounted(){
 
  },
  data(){
    return {
    
    }
  },
  components: {
    Head
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
