<template>
  <div class="List">
  <el-container>
    <div class="nav">
       <div class="nav_list" v-for="(item,i) in List" :key="i" :class="{nav_list1:isshow==i}" @click="dd(item,i)">
          {{item}}
       </div>
    </div>
  <el-aside class="aside" :class="{aside1:isno1==true}" style="width:250px">
    <el-button-group class="nav_top">
      <el-button class="btn" :class="{isB:isA==true}" @click="show(true)">实时监控</el-button>
      <el-button class="btn" :class="{isB:isA==false}" @click="show(false)">视频回放</el-button>
    </el-button-group>
    <div style="margin:15px 0" class="ipt">
     <input placeholder=" 设备名称/区域查询" class="seo">
     <i class="el-icon-search sea"></i>
    </div>
    <el-menu v-for="(item,i) in city" :key="i" background-color="#132151">
      <el-submenu :index='i'>
        <template slot="title">{{item}}</template>
         <el-menu-item-group>
           <el-submenu index="11">
           <template slot="title">一号公司</template>
           <el-menu-item-group>
             <el-menu-item index="11-1">1号组</el-menu-item>
             <el-menu-item index="11-2">2号组</el-menu-item>
           </el-menu-item-group>
          </el-submenu>
          <el-submenu index="12">
           <template slot="title">二号公司</template>
           <el-menu-item-group>
             <el-menu-item index="12-1">1号组</el-menu-item>
             <el-menu-item index="12-2">2号组</el-menu-item>
           </el-menu-item-group>
          </el-submenu>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>   
  </el-aside>
    <button @click="isno()" class="isno">T.T</button>
  <div class="right_data">
    <div>
      <p>设备总量</p>
      <p>6666</p>
    </div>
    <div>
      <p>设备上线率</p>
      <p>100%</p>
    </div>
    <div>
      <p>设备完好率</p>
      <p>100%</p>
    </div>
  </div>
  </el-container>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      isA:true,
      city:["荆州区","沙市区","公安区","松滋区","石首区","监利区","江陵区","洪湖区"],
      List:[
      "位置分布","视频监控","设备管理","区域管理","报警数据","统计报表"
      ],
      isshow:0,
      isno1:false
    }
  },
  methods: {
    show(i){
       if(i==false){
         this.isA=false
       }else{
         this.isA=true
       }
    },
    isno(){
      this.isno1=!this.isno1
    },
    dd(item,i){
      if(i!=this.isshow){
        this.isshow=i
        console.log(i)
        if(item==this.List[4]){
          this.$router.push('/List2')
        }else{
          this.$router.push('/List')
        }
      }else{
        this.isshow=0
      }
    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.isno{
  width: 50px;
  height: 20px;
  position: fixed;
  top:88px;
  left:28px;
  background: rgb(50, 68, 148);
  color:#37d2f4;
  border: none;
}
.nav{
  margin:12px 0 0 735px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
}
.nav_list{
  width: 120px;
  height: 40px;
  background-image: url(../assets/nav1.png);
  background-size: cover;
  background-repeat:no-repeat;
  text-align: center;
  line-height: 40px;
  color:cornflowerblue;
  margin-left: -12px;
}
.nav_list1{
  width: 120px;
  height: 40px;
  background-image: url(../assets/nav2.png);
  text-align: center;
  background-size: cover;
  background-repeat:no-repeat;
  line-height: 40px;
  color:rgb(19, 228, 47);
  margin-left: -12px;
}
.content{
  width: 500px;
  height: 500px;
  background: wheat;
  position: absolute;
  top:150px;
  left:950px
}
.List{
  width: 1600px;
  height: 900px;
  background-image:url(../assets/pic1.png);
  background-size:cover;
  background-repeat:no-repeat
}
.aside{
  margin-top: 100px;
  margin-left: 20px;
  height: auto;
  max-height: 760px;
  position: absolute;  
}
.aside1{
  display:none;
}
.ipt{
  display:flex;
}
.seo{
  background: #193956;
  color: #fff;
  border: 1px solid #37d2f4;
  border-radius: 30px;
  width: 100%;
  height: 35px;
  box-shadow: 0 0 5px #37d2f4;
}
.sea{
  margin-left: -35px;
  padding: 10px;
  font-size: 18px;
  color: aliceblue;
}
.aside>>>.el-menu{
  background:#132151;
  border: 1px solid #37d2f4;
  box-shadow: 0 0 5px #37d2f4;
  border-radius: 5px;
  margin: 8% 0 8% 5%;
  width: 88%;
  overflow: hidden;
  }
.aside>>>.el-submenu__title{
  color:#39a6dd;
  text-align: center;
  height:40px;
  line-height:40px;
}
.el-submenu .el-menu-item{
  height: 35px;
  line-height: 35px;
  padding: 0;
  color:cadetblue;
}
.aside>>>.el-menu-item-group__title{
  padding: 0 !important;
}
.el-submenu__title:hover{
  background-color:none;
}
el-container{
  position: relative;
}
.nav_top{
  display: flex;
  justify-content: space-around;
  margin-top:-20px;
}
.nav_top>.btn{
 background-color: #132151;
 color: #37d2f4;
 border: none;
 font-size: 18px;
 font-weight: bold;
 padding: 15px 26px;
 text-align: center;
}
.isB{
  background-color: #193956 !important;
  color: #fff !important;
}
.el-aside{
  padding: 20px;
  border: 1px solid #37d2f4;
  box-shadow: 0 0 8px #37d2f4 inset;
  overflow:auto; 
}
::-webkit-scrollbar{
  display: none;
}
.right_data{
  width: 120px;
  height: 200px;
  position: absolute;
  top:90px;
  left:1400px;
  display:flex;
	flex-direction:column;
  justify-content: space-around;
}
.right_data>div{
  width: 120px;
  height: 60px;
  border: 1px solid #37d2f4;
  opacity: 0.9;
  border-radius: 5px;
  box-shadow: 0 0 10px #37d2f4 inset;
}
.right_data>div>p{
 margin: 0;
 margin-top: 8px;
 color: #fff;
 text-align: center;
}
el-container{
  position: relative;
}
/* .List>>>.el-submenu__title{
background-color:#1de0fd
} */
</style>