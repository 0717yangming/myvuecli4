<template>
  <div class="navbar" @mouseover="navover"
    @mouseleave="navleave">
      
     <li class="classify">
         <img src="~assets/up.jpg" alt="无法查看" v-if="navIndex==-1">
          <img src="~assets/down.jpg" alt="无法查看" v-if="navIndex==1">
         <p>{{navName}}</p>
     </li>
     <div v-if="navIndex==1">
    
    <li  :class="{activited: curIndex==-2}"
        @mouseover="over(-2,'','')"
        @mouseleave="leave">
        <img src="~assets/bookcatalog.jpg" alt="无法查看">
         <p>所有商品</p>
    </li>
    <li v-for="(item, index) in navdata"
        :key="index"
        @mouseover="over(index,item.classId,item.className)"
        @mouseleave="leave"
        :class="{activited: curIndex==index}">
        <img :src="url+item.imagePath" alt="无法查看">
        <p>{{item.className}}</p>
    </li>
    </div>
  </div>
</template>

<script>
import { request } from "@/network/request";
export default {
    mounted(){
        request({
            url: 'classify',
            method: 'get'
        }).then( res => {
            console.log(res.data.object)
            this.navdata = res.data.object
        })
    },
    created(){
     
    },
    data(){
        return {
            navName: "商品分类",
            navIndex: -1,
            curIndex: -1,
            url: 'http://localhost:7170/sysImages/',
            navdata: [
                // {
                //     name: '学习用品/课本教材',
                //     imagePath: require('assets/bookcatalog.jpg')
                // },
                // {
                //     name: '运动器材/球类',
                //     imagePath: require('assets/bookcatalog.jpg')
                // },
                // {
                //     name: '出行/代步工具',
                //     imagePath: require('assets/bookcatalog.jpg')
                // },
                // {
                //     name: '宿舍便捷',
                //     imagePath: require('assets/bookcatalog.jpg')
                // },
                // {
                //     name: '羊城通/校园卡',
                //     imagePath: require('assets/bookcatalog.jpg')
                // },
                // {
                //     name: '电脑/手机/电子产品',
                //     imagePath: require('assets/bookcatalog.jpg')
                // },
                // {
                //     name: '化妆/香水',
                //     imagePath: require('assets/bookcatalog.jpg')
                // }
            ]  
        }
    },
    methods: {
        navover(){
            this.navIndex = 1;
        },
        navleave(){
            setTimeout(() => {this.navIndex = -1},100)
             
        },
        over(index,id,name){
            this.navIndex = 1;
            this.curIndex = index
            this.navName = name
            if(name=='')
            this.navName = "商品分类"
            // 如果id为空值，显示所有商品
            this.$emit('mouseon', id)
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
    /* position: absolute;
    left: 10px;
    top: 500px; */
    /* height: 100%; */
    width: 210px;
    z-index: 100;
    /* background-color: rgb(165, 136, 136) */
}
.navbar li {
    list-style: none;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    font-size: 18px;
    width: 100%px;
    height: 49px;
    margin: 1px;
    background-color: rgba(27, 3, 3, 0.7);
    color: white;
    
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
.navbar .activited {
    background-color: white;
    color: black;
    cursor: pointer;
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
.navbar .classify {
    background-color:  rgba(128, 161, 209, 0.76);
    font-size: 22px;
    font-weight: bolder
}
</style>