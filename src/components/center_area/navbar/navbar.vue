<template>
  <div class="navbar" >
     <li 
     class="classify"
     @mouseover="navover"
     @mouseleave="navleave"
     >
         <img src="~assets/up.jpg" alt="无法查看" v-if="navIndex==-1">
          <img src="~assets/down.jpg" alt="无法查看" v-if="navIndex==1">
         <p>商品分类</p>
     </li>
     <ul  @mouseover="navover"
          @mouseleave="navleave"
          v-show="1==navIndex"
          >
           
    <li  :class="{activited: curIndex==-2}"
        @mouseover="over(-2,'')"
        @mouseleave="leave">
        <img src="~assets/bookcatalog.jpg" alt="无法查看">
         <p>所有商品</p>
    </li>
    <li v-for="(item, index) in navdata"
        :key="index"
        @mouseover="over(index,item.classId)"
        @mouseleave="leave"
        :class="{activited: curIndex==index}">
        <img :src="url+item.imagePath" alt="无法查看">
        <p>{{item.className}}</p>
        </li>
    </ul>
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
             this.navIndex = -1;
        },
        over(index,id){
            this.navIndex = 1;
            this.curIndex = index
            // 如果id为空值，显示所有商品
            this.$emit('mouseon', id)
        },
        leave(){
             this.navIndex = -1;
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
.navbar .activited {
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