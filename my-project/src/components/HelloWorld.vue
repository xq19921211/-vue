<template>
  <div class="hello" style="">
    <div class="aa">
      <span class="bb">变</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>
.hello{
  width:1600px;
  height:900px;
  background:#0f0
}
.aa{
  width: 500px;
  height: 300px;
  text-align: center;
  background: #f00;
  border: 1px solid #fff;
}
.bb{
  line-height: 250px;
  font-size: 100px;
}
.aa:hover .bb{
  color: #0f0;
}
</style>

