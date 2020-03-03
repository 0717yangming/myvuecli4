<template>
  <div class="right">
      <div v-for="i in 4" :key="i" class="right_show">
      </div>
  </div>
</template>

<script>
export default {
 data(){
     return {
         rightshow: [
             {
                 msg: '',
                 image: ''
             },
         ]
         }
 }
}
</script>

<style scoped>
.right {
    width: 420px;
    height: 100%;
    background-color: rgba(131, 77, 77, 0.185);
    float: right;
    margin-right: 1px;
}
.right_show {
    width: 200px;
    height: 192px;
    background-color: rgb(192, 156, 156);
    float: left;
    border: 3px solid white;
    border-radius: 15px;
    margin:0 2px 1px;
    box-shadow: -2px 2px 12px black
}
</style>