<template>
  <div class="carousel">
      <img :src="carousel[0].image" alt="">
      <div class="dots">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return {
carousel: [
        {
            image: require('assets/fleamarket logo.jpg')
        },
    ]
    }  
}
}
</script>

<style>
.carousel {
    position: relative;
    float: left;
    height: 100%;
    width: 660px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: rgba(208, 248, 192, 0.555);
    border-radius: 15px;
    box-shadow: -2px 7px 10px rgba(42, 42, 43, 0.808)
}
.carousel img {
    width: 100%;
    height: 100%;
}
.dots {
 position: absolute;
 bottom: 0px;
 left: 45%;
}
.dot {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    border: 1px solid red;
    background-color: white;
    float: left;
    margin: 5px;
}
</style>