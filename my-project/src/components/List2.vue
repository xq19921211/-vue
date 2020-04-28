<template>
  <div class="List2">
   <div class="upper">
    <div>
      <ve-pie :data="chartData1"></ve-pie>
    </div>
    <div>
      <ve-line :data="chartData2"></ve-line>
    </div>
    <div>
      <ve-histogram :data="chartData3"></ve-histogram>
    </div>
   </div>
   <div class="lower">
   <div>
    <p style="margin:0 0 10px 0px;color:#fff;font-size:18px">告警情况统计表</p>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="日期"
      width="250">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="250">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="电话"
      width="250"
      >
    </el-table-column>
    <el-table-column
      prop="state"
      label="状态"
      width="200" 
      >
    <el-button type="text" size="small">编辑</el-button>
    </el-table-column>
  </el-table>
  </div>
   </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VeLine from 'v-charts/lib/line.common';
import VeHist from 'v-charts/lib/histogram.common';
import vePie from 'v-charts/lib/pie.common'
Vue.component(VeLine.name,VeLine)
Vue.component(VeHist.name,VeHist)
Vue.component(vePie.name,vePie)


export default {
  name: 'List2',
   methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex%2 === 0) {
          return 'warning-row';
        } else{
          return 'success-row';
        }
        return '';
      }
   },
  data () {
    return {
     chartData1: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        },
     chartData2: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        },
     chartData3: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        },
     tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          phone:19971333317,
          
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
           phone:19971333317,
          
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
           phone:19971333317,
         
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
           phone:19971333317,
          
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
           phone:19971333317,
          
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
           phone:19971333317,
          
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
           phone:19971333317,
          
        },
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.List2{
  width: 1600px;
  height: 900px;
  background-image:url(../assets/pic2.png);
  background-size: cover;
  background-repeat:no-repeat
}
.upper{
  display: flex;
  justify-content: space-around;
}
.upper>div{
  width: 450px;
  height: 350px;
  border: 1px solid #fff;
  border-radius: 4px;
  margin-top: 80px;
  padding: 5px;
  box-shadow: 0 0 10px #37d2f4 inset;
}
.lower{
  width: 100%;
}
.lower>div[data-v-b970f558]{
  padding: 15px;
  height: 400px;
}
.lower>div{
  width: 1500px;
  border: 1px solid #fff;
  margin:20px auto;
  padding: 10px;
  box-shadow: 0 0 10px #37d2f4 inset;
}
.el-table>>>.warning-row {
    background: #193956;
  }

.el-table>>>.success-row {
    background: #296692;
  }
.el-table>>>th{
    background-color: #143963;
    text-align: center;
    color:#37d2f4;
    font-size:16px;
}
.el-table>>>td{
  padding: 6px 0;
}
.el-table>>>.cell{
 text-align: center;
}
.el-table>>>tr{ 
  color: #fff;
} 
.el-table>>>.el-table__body tr:hover>td{
  background-color: rgb(41, 90, 129)!important;
}
</style>

