<template>
  <div class="center_area" :style="{width: _width}">
        <!-- <Navbar></Navbar> -->
        <Carousel></Carousel>
        <Right></Right>
  </div>
</template>

<script>
// import Navbar from 'comp/center_area/navbar/navbar'
import Carousel from 'comp/center_area/Carousel/carousel'
import Right from 'comp/center_area/right/right'
export default {
mounted(){
   
},
props: {
  _width: {
    type: String,
    default: '1230px'
  }
},
components: {
    // Navbar,
    Carousel,
    Right,
},
data(){
return {
   
}
}
}
</script>

<style scoped>
.center_area {
    height: 400px;
    /* width: 1237px; */
    /* width: 98%; */
    border:12.5px solid rgba(228, 231, 231, 0.76);
    border-top:30px solid rgb(199, 243, 252);
    border-bottom:8px solid rgb(198, 213, 216);
    margin: 0 auto 0;
}
</style>