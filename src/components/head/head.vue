<template>
  <div class="head" :style="{width: _width}">
    <!-- <Register></Register> -->
     <Top-nav></Top-nav>
  </div>
</template>

<script>
// import Register from 'comp/user/register'
import TopNav from "comp/topnav/topNav"
export default {
  components: {
   TopNav
  },
  data(){
    return {
     
    }
  },
  methods: {
    
  },
  props: {
  _width: {
    type: String,
    default: '1237px'
  }
}
}
</script>

<style scoped>
.head {
    height: 45px;
    /* width: 1257px; */
    /* width: 100%; */
    /* background-color: rgb(108, 86, 131); */
    margin: 0 auto;
}



</style>