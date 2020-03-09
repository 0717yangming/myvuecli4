<template>
  <div class="home_size">
    <Center-area _width="1238px"></Center-area>
    <Commodity-show _width="1263px"></Commodity-show>
  </div>
</template>

<script>
import CenterArea from 'comp/center_area/center_area'
import CommodityShow from './commodityShow'

export default {
    name: 'home',
    components: {
        CenterArea,
        CommodityShow
        
    }
}
</script>

<style scoped>
.home_size {
  width: 1230px;
}
</style>