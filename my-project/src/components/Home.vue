<template>
  <div class="home">
    <div class="login">
       <h1 style="text-align:center;color:#149edc;margin:30px 0">用户登录</h1>
       <p class="text">
         <i class="el-icon-user-solid"></i>
         <input type="text" placeholder="用户名">
         </p>
       <p class="text">
         <i class="el-icon-s-goods"></i>
         <input type="password" placeholder="密码">
         </p>
       <div class="pwd">
         <span><input type="checkbox" name="">记住密码</span>
         <span style="margin-left:80px"><a href="" style="color:#265477;text-decoration:none">忘记密码?</a></span>
       </div>
       <el-button type="primary" class="log" @click="res()">登 录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
     
    }
  },
  methods:{
    res(){
      this.$router.push("/List")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  margin: 0;
  padding: 0;
}
.home{
  width: 1600px;
  height: 900px;
  background-image:url(../assets/login.png);
  background-size: cover;
  background-repeat:no-repeat
}
.login{
  width: 250px;
  height: 360px;
  border: 2px solid #149edc;
  box-shadow: 0 0 10px #37d2f4 inset;
  position: absolute;
  top:240px;
  left:1100px;
  border-radius: 4px; 
  padding: 10px 50px;
}
.text>input{
  width: 85%;
  height: 40px;
  background:#265477;
  opacity: 0.5;
  border-radius: 4px;
  border:1px solid #fff;
  box-shadow: 0 0 10px #37d2f4 inset;
  color: #fff;
  font-size: 16px;
  position: relative;
  padding-left: 30px;
  margin-bottom: 20px;
}
.text>.el-icon-user-solid{
 color: #fff;
 position:absolute;
 top: 125px;
 left:60px;
}
.text>.el-icon-s-goods{
 color: #fff;
 position:absolute;
 top: 190px;
 left:60px;
}
.pwd>span{
  color: #fff;
}
.log{
  width: 100%;
  margin-top: 20px;
  font-size: 16px;
}
</style>

