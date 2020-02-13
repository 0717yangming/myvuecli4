<template>
  <div class="navbar">
     <li>
         <img src="~assets/bookcatalog.jpg" alt="">
         <p>商品分类</p>
     </li>
    <li v-for="(item, index) in navdata" 
        :key="index"
        @mouseover="over(index)"
        @mouseleave="leave"
        :class="{activited: curIndex==index}">
        <img :src="item.image" alt="无法查看">
        <p>{{item.name}}</p>
        </li>
   
  </div>
</template>

<script>
export default {
data(){
    return {
        curIndex: -1,
        navdata: [
            {
                name: '学习用品/课本教材',
                image: require('assets/bookcatalog.jpg')
            },
            {
                name: '运动器材/球类',
                image: require('assets/bookcatalog.jpg')
            },
            {
                name: '出行/代步工具',
                image: require('assets/bookcatalog.jpg')
            },
            {
                name: '宿舍便捷',
                image: require('assets/bookcatalog.jpg')
            },
            {
                name: '羊城通/校园卡',
                image: require('assets/bookcatalog.jpg')
            },
            {
                name: '电脑/手机/电子产品',
                image: require('assets/bookcatalog.jpg')
            },
            {
                name: '化妆/香水',
                image: require('assets/bookcatalog.jpg')
            }
        ]  
    }
},
methods: {
    over(index){
        this.curIndex = index
    },
    leave(){
        this.curIndex =  -1
    }
}
}
</script>

<style scoped>
.navbar {
    /* position: relative;
    left: 0px; */
    float: left;
    height: 100%;
    width: 210px;
    /* background-color: rgb(165, 136, 136) */
}
.navbar li {
    list-style: none;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    font-size: 16px;
    width: 100%px;
    height: 49px;
    margin: 1px;
    /* border: 1px solid red; */
}
.navbar li img {
    height: 100%;
    width: 30%;
    float: left;
}
.navbar li p {
    display: inline-block;
    padding-top: 15px;
}
.activited {
    background-color:rgb(195, 151, 252);
    cursor: pointer;
}
.activited p {
     border-bottom: 1px solid blue;
}
.activited img {
    opacity: 0.5;
}
</style>