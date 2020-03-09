<template>
  <div >
    <form action="" class="login" >
        <label for="username">
                用户名:
             <input type="text" id="username">
        </label>
       
    </form>
  </div>
</template>

<script>
export default {
    name: "login"
}
</script>

<style>
.login {
    width: 500px;
    height: 800px;
    border: 1px solid black;
    margin: 30px auto;
}
.login label {
    margin-top: 60px;
    display: inline-block;
}
.login label input {
    border: 1px solid blanchedalmond
}
</style>