<template>
  <div class="navtop">
      <div class="curlogin">
           <img src="~assets/login_icon.jpg">
           <p>{{curLogin}}</p>
      </div>
      <ul>
        <router-link  v-for="(item,index) in navdata" :key="index" 
        :to="item.to"
        @click.native="over(index)"
        :class="{activited: index == curIndex}"
        tag="li"
      >{{item.name}}
      </router-link>
      </ul>
  </div>
</template>

<script>
export default {
    name: "topNav",
    methods: {
        over(index){
            this.curIndex = index
        }
    },
    data(){
        return {
            curLogin: "请登录~~",
            curIndex: 0,
            navdata: [
                {
                    name: "首页",
                    to: "/index",
                },
                {
                    name: "发布商品",
                    to:  "/release",
                },
                {
                    name: "发布需求",
                    to:  "/demand",
                },
                {
                    name: "购物车",
                    to:  "/shoppingcar",
                },
                {
                    name: "收藏夹",
                    to:  "/collect",
                },
                {
                    name: "登录",
                    to:  "/login",
                },
                {
                    name: "注册",
                    to:  "/register",
                },

            ]
        }
    }
}
</script>

<style scoped>
.navtop {
    height: 30px;
    margin: 0 auto;
}
.navtop .curlogin {
    float: left;
    margin: 15px;
}
.navtop .curlogin img {
    width: 35px;
    height: 35px;
    display: inline-block;
    margin-left: 15px;
    margin-right: 8px;
}
.navtop .curlogin p {
     display: inline-block;
}
.navtop ul {
    float: right;
}
.navtop li {
    list-style: none;
    float: left;
    width: 100px;
    height: 100%;
    background-color: blanchedalmond;
    color: black;
    font-size: 17px;
    line-height: 30px;
    border: 1px solid blanchedalmond;
    cursor: pointer;
    margin: 12px;
    vertical-align: middle;
}
.navtop .activited {
    background-color:rgba(73, 69, 69, 0.699);
    color: white;
}
</style>