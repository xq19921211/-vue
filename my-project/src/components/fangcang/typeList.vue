<template>
  <div id="type_list">
    <div class="list_top">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 3" :key="item">
          <img src="../../assets/企业氧舱.png" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="list_mid">
      <img src="../../assets/zcd.png" alt="">
      <img src="../../assets/syd.png" alt="">
      <img src="../../assets/qyyc.png" alt="">
    </div>
    <div class="list_bom">
      <div class="bom1">
        <img src="../../assets/lclc.jpg" alt="" style="opacity: 0.5">
      </div>
      <div class="bom2">
        <img src="../../assets/procedure01.png" alt="">
        <img src="../../assets/procedure-arrow.png" alt="">
        <img src="../../assets/procedure02.png" alt="">
        <img src="../../assets/procedure-arrow.png" alt="">
        <img src="../../assets/procedure03.png" alt="">
        <img src="../../assets/procedure-arrow.png" alt="">
        <img src="../../assets/procedure04.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "typeList",
  data() {
    return {};
  }
};
</script>
<style scoped>
.el-carousel__item img {
    line-height: 300px;
  }
.list_mid{
  width:1600px;
  display: flex;
  justify-content:space-around;
}
.list_bom{
  width: 100%;
  height: 300px;
  background: #e0eff3;
  margin:10px 0;
}
.bom1,.bom2{
  display: flex;
  justify-content: center;
}
</style>