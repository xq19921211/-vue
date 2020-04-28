<template>
  <div id="login1">
     <div class="login1">
        <el-row class="register">         
          <el-button class="reg1" :class="{reg:aa==false}" @click="bb(false)" style="background-color:#7d38a5;color:#fff">登录</el-button>
          <el-button class="reg2" :class="{reg:aa==true}" @click="bb(true)" style="background-color:#7d38a5;color:#fff">注册</el-button>          
        </el-row>
      <div v-if="aa==true">
        <div class="logtext">
          <el-input v-model="input" placeholder="请输入内容" class="text"></el-input>
          <el-input v-model="input" placeholder="请输入内容" class="text"></el-input>
          <el-input v-model="input" placeholder="请输入内容" class="text"></el-input>
          <el-input v-model="input" placeholder="请输入内容" class="text"></el-input>
        </div>
        <el-button round class="zhuce">注册</el-button>
        <div class="log_bom">
          <el-checkbox v-model="checked" style="color:#fff">显示密码</el-checkbox>
          <a href="" style="color:#fff;">前往登录?</a>
        </div>
      </div>
      <div v-else>
          <div class="logtext">
          <el-input v-model="input" placeholder="请输入内容" class="text"></el-input>
          <el-input v-model="input" placeholder="请输入内容" class="text"></el-input>
          <el-input v-model="input" placeholder="请输入内容" class="text"></el-input>
          <el-input v-model="input" placeholder="请输入内容" class="text"></el-input>
          <el-button round class="zhuce">登录</el-button>
          <div class="log_bom">
            <el-checkbox v-model="checked" style="color:#fff">记住密码</el-checkbox>
            <a href="" style="color:#fff;">忘记密码?</a>
          </div>
      </div>
      </div>
     </div>
  </div>
</template>
<script>
 export default{
     name:"Login",
     data(){
       return{
          input:'',
          aa:true
       }
     },
     methods: {
      bb(i){
        if(i==false){
         this.aa=false
        }else{
         this.aa=true
        }       
      }
    }
 }
</script>
<style scoped>
#login1{
 width: 1600px;
 height: 100vh;
 background-image:url(../../assets/login2.jpg);
 background-size: cover;
 background-repeat: no-repeat;
 position: relative;
}
.login1{
  width: 330px;
  height: 500px;
  border: 3px solid #fff;
  background-color: #7d38a5;
  border-radius: 5px;
  position: absolute;
  top:150px;
  left:1050px;
  padding:20px;
  }
  .register{
    display: flex;
    justify-content: space-around;
  }
  .reg{
    border-bottom:2px solid #fff !important;
    font-weight: bold;
  }
  .reg1,.reg2{
    width: 50%;
    border: none;
    font-size:40px;
  }
  .login1>>>.el-input__inner{
    margin-top: 30px;
    background:#7d38a5;
    border: #fff;
    color: #fff;
    font-size: 25px;
    border-bottom: 2px solid #fff
  }
  a{
    text-decoration:none
  }
  .zhuce{
    width:100%;
    height: 50px;
    font-size: 20px;
    color: #7d38a5;
    font-weight: bold;
    margin: 20px 0;
  }
  .log_bom{
    display: flex;
    justify-content:space-around;
  }
  .log_bom>>>.el-checkbox__label{
    font-size: 15px;
  }
</style>
