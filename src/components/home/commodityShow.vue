<template>
  <div class="show_commodity" :style="{width: _width}">
      <Navbar @mouseon="curClassify" class="navbar"></Navbar>
      <button class="latest" @click="latestSort">最新发布</button>
        <!-- 搜索栏 -->
        <div class="searchbar">
                <input type="text" id="search" value="查询商品" 
                onfocus="if(value=='查询商品')value=''" onblur="if(!value)value='查询商品'" v-model="keyword" > 
        </div>
         <!-- 排序方式 -->
        <div class="commoditySorts">
            价格排序：
            <select v-model="option" >
                <option v-for="item in commoditySorts" :value="item.value" :key="item.id">{{item.value}}</option>
                
            </select>
        </div>
        <!-- 商品显示 -->
        <div v-for="(item, index) in curShowCommodities" :key="index"
        class="commodity"
        @mouseover="cover(index)"
        @mouseleave="cleave"
        :class="{commodity_activited: curIndex==index}">
            <img :src="url+item.picName" :alt="item.name">
            <p>
                {{item.name}}
            </p>
            <p class="price">
                 {{item.price}}￥
            </p>
            <p style="font-size: 16px">发布时间：{{item.addTime}}</p>
        </div>      
  </div>
</template>

<script>
import { request } from "@/network/request";
import Navbar from 'comp/center_area/navbar/navbar'
export default {
    components: {
       Navbar
    },
    mounted() {
        console.log(this.url)
         request({
            method: 'get',
            url: 'commodity'                           
        }).then(res => {
            console.log(res.data)
            this.commodities = res.data
            this.currentshow = this.commodities
        }).catch((req) => {
              console.log(req)
        })
    },
    data(){
        return {
            option: '从小到大',
            commoditySorts: [
                     {
                        id: 2,
                        value: '从大到小'
                    },
                     {
                        id: 3,
                        value: '从小到大'
                    }
            ],
            curIndex: -1,
            isActivited: false,
            url: this.$store.state.baseUrl,
            commodities: [
                // {   
                //     id: 1,
                //     price: '12￥',
                //     name: '台灯',
                //     catalog: '生活用品',
                //     imagePath: "http://localhost:7170/images/96fa9c5b-074d-44a7-9a25-7f2dcfdb7b98.jpg"
                // },
                // {   
                //     id: 2,
                //     price: '12￥',
                //     name: '台灯2',
                //     catalog: '生活用品',
                //     image: require('assets/airFan/dianfengshan.jpg')
                // },
                // {   
                //     id: 3,
                //     price: '12￥',
                //     name: '电风扇',
                //     catalog: '生活用品',
                //     image: require('assets/airFan/dianfengshan.jpg')
                // },
                // {   
                //     id: 4,
                //     price: '12￥',
                //     name: '电风扇',
                //     catalog: '生活用品',
                //     image: require('assets/airFan/dianfengshan.jpg')
                // },
                // {   
                //     id: 5,
                //     price: '12￥',
                //     name: '电风扇',
                //     catalog: '生活用品',
                //     image: require('assets/airFan/dianfengshan.jpg')
                // },
                // {   
                //     id: 6,
                //     price: '12￥',
                //     name: '电风扇',
                //     catalog: '生活用品',
                //     image: require('assets/airFan/dianfengshan.jpg')
                // },
                //  {   
                //     id: 7,
                //     price: '12￥',
                //     name: '电风扇',
                //     catalog: '生活用品',
                //     image: require('assets/airFan/dianfengshan.jpg')
                // },
                // {   
                //     id: 8,
                //     price: '12￥',
                //     name: '电风扇',
                //     catalog: '生活用品',
                //     image: require('assets/airFan/dianfengshan.jpg')
                // },
                // {   
                //     id: 9,
                //     price: '12￥',
                //     name: '电风扇',
                //     catalog: '生活用品',
                //     image: require('assets/airFan/dianfengshan.jpg')
                // },
                // {   
                //     id: 10,
                //     price: '12￥',
                //     name: '电风扇',
                //     catalog: '生活用品',
                //     image: require('assets/airFan/dianfengshan.jpg')
                // },
                // {   
                //     id: 11,
                //     price: '12￥',
                //     name: '电风扇',
                //     catalog: '生活用品',
                //     image: require('assets/airFan/dianfengshan.jpg')
                // },
                // {   
                //     id: 12,
                //     price: '12￥',
                //     name: '电风扇',
                //     catalog: '生活用品',
                //     image: require('assets/airFan/dianfengshan.jpg')
                // },
            ],
            currentshow:[],
            keyword: '',
        }
    },
    watch: {
        option: function(val) {
            if(val=='从小到大')
            this.curShowCommodities.sort((a, b) => {return a.price-b.price})
             if(val=='从大到小')
            this.curShowCommodities.sort((a, b) => {return b.price-a.price})
        }
    },
    computed: {
        curShowCommodities() {
            return this.currentshow.filter(
                (commodity) => commodity.name.indexOf(this.keyword.trim())>-1 ).sort((a, b) => {return a.price-b.price})
        }
    },
    methods: {
        latestSort(){
            this.option = ''
            this.curShowCommodities.sort((a, b) => {
                let aTimeString = a.addTime.replace(/-/g, '/')
                let bTimeString = b.addTime.replace(/-/g, '/')
                console.log(aTimeString)
                 console.log(bTimeString)
                let bTime = new Date(bTimeString).getTime()
                let aTime = new Date(aTimeString).getTime()
                return bTime - aTime}
                )
        },
        curClassify(classifyId){
            if(classifyId!='')
            this.currentshow = this.commodities.filter( c => c.classifyName.classId == classifyId)
            else
            this.currentshow = this.commodities
        },
        // 分类
         cover(index){
            this.curIndex = index
        },
        cleave(){
             this.curIndex = -1
        },
        // 商品
        over(){
            this.isActivited = true
        },
        leave(){
             this.isActivited = false
        }
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
.show_commodity{
    /* width:100%; */
    height: 700px;
    /* background-color: aqua; */
}
#search { 
    width: 440px;
    height: 40px;
    border:none;    /*取消默认的边框以设置自定义边框*/
    outline:none;   /*取消浏览器默认的蓝光边框以设置自定义的输入框*/
    font-size: 16px;        /*设置提示文字的字体大小*/
    color: rgb(112, 112, 112);   /*设置提示文字颜色*/
    margin-left: 10px;    /*给输入框与左边放大镜图标10px的间距*/
}
.searchbar {     
    border: rgb(218, 218, 218) solid 1px;
    border-radius: 2em;    /*左右边框为半圆*/
    width: 552px;
    height: 42px;
    /* box-shadow: 0px 0px 5px rgb(212, 212, 212); */
    margin: 0 auto;   /*重要！整个搜索框居中对齐*/
    margin-top: 40px
}
#search, .mg {
    vertical-align: middle;
}
.mg {
    height: 100%;
    /* margin-left: 15px; */
}
#search, .mg {
    vertical-align: middle;
}
.activited {
    cursor: pointer;
}
.commodity {
    width: 184px;
    height: 300px;
    float: left;
    background-color: cyan;
    margin: 70px 16px 0 10px;
    box-shadow: 0 0 5px rgb(104, 104, 236);
    border-radius: 0px 0px 10px 10px;
}
.commodity img {
    width: 100%;
    height: 70%;
    opacity: 0.7;
}
.commodity p {
    font-size: 20px;
    color: blue; 
}
.commodity p .price {
    color: red;
    font-size: 24px;
}
.commodity_activited {
    cursor: pointer;
    box-shadow: 0 0 17px rgb(104, 104, 236)
}
.commoditySorts {
   position: relative;
   left: 1000px;
   width: 200px;
   top: -30px;

}
.commoditySorts select {
    font-size: 19px;
    border: 1px solid rgb(216, 176, 176);
    
}
.latest {
    position: absolute;
    top: 520px;
    left: 230px;
    width: 100px;
    height: 30px;
    cursor: pointer;
}
.navbar {
position: absolute;;
top: 510px
}
</style>