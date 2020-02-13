<template>
  <div class="show_commodity" :style="{width: _width}">
        <div class="searchbar">
        <input type="text" id="search" value="查询商品" 
        onfocus="if(value=='查询商品')value=''" onblur="if(!value)value='查询商品'" v-model="keyword" > 
       <img src='~assets/search.png' class="mg" 
       @mouseover="over"
       @mouseleave="leave"
       :class="{activited: isActivited}">
        </div>
        <div v-for="(item, index) in curShowCommodities" :key="index"
        class="commodity"
        >
            <img :src="item.image" :alt="item.name">
            <p>
                {{item.name}}
            </p>
            <p>
                 {{item.price}}
            </p>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isActivited: false,
            commodities: [
                {   
                    id: 1,
                    price: '12￥',
                    name: '台灯',
                    catalog: '生活用品',
                    image: require('assets/airFan/dianfengshan.jpg')
                },
                {   
                    id: 2,
                    price: '12￥',
                    name: '台灯2',
                    catalog: '生活用品',
                    image: require('assets/airFan/dianfengshan.jpg')
                },
                {   
                    id: 3,
                    price: '12￥',
                    name: '电风扇',
                    catalog: '生活用品',
                    image: require('assets/airFan/dianfengshan.jpg')
                },
                {   
                    id: 4,
                    price: '12￥',
                    name: '电风扇',
                    catalog: '生活用品',
                    image: require('assets/airFan/dianfengshan.jpg')
                },
                {   
                    id: 5,
                    price: '12￥',
                    name: '电风扇',
                    catalog: '生活用品',
                    image: require('assets/airFan/dianfengshan.jpg')
                },
                {   
                    id: 6,
                    price: '12￥',
                    name: '电风扇',
                    catalog: '生活用品',
                    image: require('assets/airFan/dianfengshan.jpg')
                },
                 {   
                    id: 7,
                    price: '12￥',
                    name: '电风扇',
                    catalog: '生活用品',
                    image: require('assets/airFan/dianfengshan.jpg')
                },
                {   
                    id: 8,
                    price: '12￥',
                    name: '电风扇',
                    catalog: '生活用品',
                    image: require('assets/airFan/dianfengshan.jpg')
                },
                {   
                    id: 9,
                    price: '12￥',
                    name: '电风扇',
                    catalog: '生活用品',
                    image: require('assets/airFan/dianfengshan.jpg')
                },
                {   
                    id: 10,
                    price: '12￥',
                    name: '电风扇',
                    catalog: '生活用品',
                    image: require('assets/airFan/dianfengshan.jpg')
                },
                {   
                    id: 11,
                    price: '12￥',
                    name: '电风扇',
                    catalog: '生活用品',
                    image: require('assets/airFan/dianfengshan.jpg')
                },
                {   
                    id: 12,
                    price: '12￥',
                    name: '电风扇',
                    catalog: '生活用品',
                    image: require('assets/airFan/dianfengshan.jpg')
                },
            ],
            keyword: ''
        }
    },
    computed: {
        curShowCommodities() {
            return this.commodities.filter(
                (commodity) =>  commodity.name.indexOf(this.keyword.trim())>-1
            )
        }
    },
    methods: {
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
    height: 280px;
    float: left;
    background-color: cyan;
    margin: 70px 16px 0 10px;
    box-shadow: 0 0 12px rgb(104, 104, 236)
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
</style>