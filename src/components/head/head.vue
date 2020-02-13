<template>
  <div class="head" :style="{width: _width}">
    
  </div>
</template>

<script>
export default {
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
    height: 120px;
    /* width: 1257px; */
    /* width: 100%; */
    background-color: rgb(108, 86, 131);
    margin: 0 auto;
}



</style>