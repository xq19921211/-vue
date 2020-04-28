<template>
  <div id="out_apply">
    <el-radio-group v-model="tabPosition" style></el-radio-group>
    <img src="../../assets/logo.jpg" alt class="logo" />
    <img src="../../assets/logo1.png" alt class="logo2" />
    <el-tabs :tab-position="tabPosition" style="height:100vh;margin-top:35px">
      <el-tab-pane class="pane" label="企业基本信息填报">
        <h3 style="color:#00f">入舱企业基本信息填表</h3>
        <div class="form">
           <input type="text">
           <input type="text">
           <input type="text">
           <input type="text">
           <input type="text">
           <input type="text">
           <input type="text">
           <input type="text">
           <input type="text">
           <input type="text">
           <input type="text">
           <input type="text">
           <input type="text">
           <input type="text">
           <div style="margin:10px 20px">
             企业规模属于：
            <input type="radio" name="scale"/>中型
            <input type="radio" name="scale"/>小型
            <input type="radio" name="scale"/>微型
           </div>
           <div>
          <div style="margin:10px 20px">
           <span>所属行业：</span>    
           <select>           
            <option value="">请选择</option>
            <option value="">小工</option>
            <option value="">包工</option>
            <option value="">点工</option>
           </select>
           </div>
           <div style="margin:10px 20px">
             企业类型：
            <input type="radio" name="type"/>国有
            <input type="radio" name="type"/>合资
            <input type="radio" name="type"/>民营
            <input type="radio" name="type"/>其他
           </div>
           <div class="sub">
            <input type="submit" style="background-color:#00f;color:#fff;font-size:16px">
            <input type="button" value='取消' style="margin-left:20px;font-size:16px">
           </div>
           </div>
        </div>
      </el-tab-pane>
      <el-tab-pane class="pane" label="审核结果查询">
        <div style="width:1000px;height:150px;border:1px solid #e6e6e6">
          <p style="border-bottom:1px solid #e6e6e6;padding:0 0 10px 10px;font-weight:bold">审核结果</p>
          <div style="padding-left:10px">
             您的企业已达到“企业方舱”的准入标准，无失信记录，信用评级为：★★★★★
          </div>
        </div>
        <div style="width:1000px;height:60vh;border:1px solid #e6e6e6;margin-top:20px">
          <p style="border-bottom:1px solid #e6e6e6;padding:0 0 10px 10px;font-weight:bold">
            以下是为您匹配到的贷款产品</p>
          <div class="match">
           <div class="text_list">
            <div class="text_left">
              <div style="text-align:center">
                <h3>企业信用贷</h3>
                <h5>中小企业快融通</h5>
              </div>
            </div>
            <div class="text_right">
              <p style="display: flex;justify-content:space-between;">
                <span>
                  <img src="../../assets/pro-dis-title01.png" alt="">
                  <img src="../../assets/pro-dis-title02.png" alt="">
                  <img src="../../assets/pro-dis-title03.png" alt="">
                </span>
                <span>浦发银行江汉分行</span>
                <span>产品代码：*#*#*#*#</span>
                <span>收藏☆</span>
              </p>
              <p style="display: flex;justify-content:space-between;">
                <span>融资金额（万元）</span>
                <span>融资期限（月）</span>
                <span>融资利润</span>
                <span><button>我要申请</button></span>
              </p>
              <p style="display: flex;justify-content:space-between;">
                <span>100.00~5000.00</span>
                <span>6~24</span>
                <span>5.00%~12.00%</span>
                <span><button>查看详情</button></span>
              </p>
            </div>
           </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane class="pane" label="出仓申请">
         <div style="width:1000px;height:220px;border:1px solid #e6e6e6">
          <p style="border-bottom:1px solid #e6e6e6;padding:0 0 10px 10px;font-weight:bold">出舱申请</p>
          <div style="padding-left:10px;margin:10px">
            <div style="margin:20px 0">
             请上传入舱后收入凭证：<input type="text" style="width:50%"><input type='file' />
            </div>
            <div style="margin:20px 0">
             请上传入舱后债务凭证：<input type="text" style="width:50%"><input type='file' />
            </div>
            <div class="sub">
            <input type="submit" style="background-color:#00f;color:#fff;font-size:16px">
            <input type="button" value='取消' style="margin-left:20px;font-size:16px">
           </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: "outApply",
  data() {
    return {
      tabPosition: "left"
    };
  }
};
</script>
<style scoped>
.logo {
  position:relative;
  width: 150px;
  top: 30px;
  left: 0px;
}
.logo2 {
  position: absolute;
  top: 10px;
  left: 180px;
}
.pane{
  margin:50px 0 40px 10px;
}
.form{
  width:1000px;
  height: 500px;
  border: 1px solid #00f;
  padding:20px;
}
.form>input{
  width: 400px;
  height: 23px;
  margin:10px 20px;
}
.sub{
  display:flex;
  justify-content:center;
}
.text_list{
  display: flex;
  padding: 20px;
}
.text_left{
  width: 180px;
  height: 120px;
  border: 1px solid #e3e3e3;
}
.text_right{
  width: 800px;
  height: 120px;
  border: 1px solid #e3e3e3;
}
p{
  margin: 0;
  margin: 10px 0 0 10px;
}
</style>