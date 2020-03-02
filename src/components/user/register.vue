<template>
  <div>
    <button @click="save">注册</button>
    姓名：<input type="text" v-model="user.name"><br>
    学院：<input type="text" v-model="user.academy"><br>
    专业：<input type="text" v-model="user.major"><br>
    班级：<input type="text" v-model="user.banji"><br>
    密码：<input type="password" v-model="user.password">
    宿舍号: <input type="text" v-model="user.domitory">
    电话：<input type="text" v-model="user.phone">
    性别：<input type="text" v-model="user.sex">
    邮箱：<input type="text" v-model="user.email"><br>
  </div>
</template>

<script>
import Httpservice from '@/services/HttpService'
export default {
    name: "register",
    data(){
        return {
            user: {
                uid: 0,
                academy: '',
                banji: '',
                createTime: '',
                major: '',
                name: '',
                password: '',
                phone: '',
                domitory: '',
                reputation: 100,
                sex: '',
                state: '正常',
                who: '普通用户',
                email: ''
            },
            axios: Httpservice.getAxios
        }
    },
    methods: {
        save(){
            // console.log(JSON.stringify(this.user))
            this.axios.post("user/save", {
                uid: 0,
                academy: this.user.academy,
                banji: this.user.banji,
                createTime: '',
                major: this.user.major,
                name: this.user.name,
                password: this.user.password,
                phone: this.user.phone,
                reputation: 100,
                sex: this.user.sex,
                state: '正常',
                who: '普通用户',
                email: this.user.email,
                domitory: this.user.domitory
            }).then((user) => {
                console.log(user)
            })
        }
    }
}
</script>

<style>

</style>