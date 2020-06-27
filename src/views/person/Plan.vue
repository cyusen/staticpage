<template>
  <div>
    <div class="head"> 
        <img class="img1" src="@/assets/images/drawable-xhdpi/jt.png" alt="" width="25px" height="25px" @click="goPersonal">
        <p class="p1">单词进度</p>
    </div>
   
    <div class="body">
        <p class="p2">103</p>
        <p class="p3">单词总数</p>
    </div>
    <div class="body1">
        <div>
            <p class="p4">3</p>
            <p class="p5"> 已掌握</p>
        </div>
        <div>
            <p class="p4 ">0</p>
            <p class="p5">正在学</p>
        </div>
        <div>
            <p class="p4">100</p>
            <p class="p5">新词</p>
        </div>
    </div>
    <div class="between"></div>
    <div class="body2">
        <img src="@/assets/images/drawable-xhdpi/yx.png" alt="" width="375px">
        <table >
            <tr>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
           </tr>
            <tr>
               <td>126</td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
           </tr>
            <tr>
               <td>105</td>
               <td ></td>
                <td class="td"></td>
                 <td class="td"></td>
                  <td class="td"></td>
                   <td class="td"></td>
                   <td class="td"></td>
                    <td ></td>
           </tr>
           <tr>
               <td>84</td>
               <td ></td>
                <td class="td"></td>
                 <td class="td"></td>
                  <td class="td"></td>
                   <td class="td"></td>
                    <td class="td"></td>
                   <td ></td>
           </tr>
           <tr>
               <td>63</td>
               <td ></td>
                <td class="td"></td>
                 <td class="td"></td>
                  <td class="td"></td>
                   <td class="td"></td>
                    <td class="td"></td>
                   <td ></td>
           </tr>
           <tr>
               <td>42</td>
               <td ></td>
                <td class="td"></td>
                 <td class="td"></td>
                  <td class="td"></td>
                   <td class="td"></td>
                     <td class="td"></td>
                   <td ></td>
           </tr>
           <tr>
               <td>21</td>
               <td ></td>
                <td class="td"></td>
                 <td class="td"></td>
                  <td class="td"></td>
                   <td class="td"></td>
                    <td class="td"></td>
                   <td ></td>
           </tr>
        </table>
        <div><span>6.17</span><span>6.18</span><span>6.19</span><span>6.20</span><span>6.21</span></div>
    </div>
    <div class="between"></div>
    <div class="last">
    <img src="@/assets/images/drawable-xhdpi/plan.png" alt="" width="375px">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Plan',
  data() {
    return {
      active: 0
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
      goPersonal(){
          this.$router.push('/Personal')
      }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.head{
    height: 55px;
    width: 100%;
    padding-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
    background: #fff;
    border-bottom: 1px solid rgb(226, 218, 218);
}
.head .p1{
  margin-top: -30px;
  margin-left: 60px;
  font-size: 20px;
  color: rgb(102, 102, 102);
  font-weight: bold;
}
.body{
    height: 60px;
    text-align: center;
    margin-top: 10px;
}
.p2{
   color: rgb(41, 190, 160); 
   font-weight: bold;
   font-size: 25px;
}
.p3{
    margin-top: 3px;
    font-size: 14px;
    color: #999;
}
.body1{
    height: 60px;
}
.body1 div{
    float: left;
    width: 33.3%;
    text-align: center;
}
.p4{
    font-size: 18px;
    font-weight: bold;
}
.p5{
    font-size: 14px;
    color: #999;
}
.between{
   width: 100%;
   height :5px;
   background: rgb(238,238,238);
}
.body2{
    height: 230px;
}
.body2 div{
    margin-left: 55px;
}
.body2 span{
    font-size: 12px;
    margin-left: 25px;
}
tr{
    text-align: center;
    height: 20px;
}
td{
    width: 50px;
}
table{
    margin-left: 30px;
}
tr,td{
    border-right: 1px solid rgb(238,238,238);
    border-bottom: 1px solid rgb(238,238,238);
}
tr :last-child{
    border-right: none;
}
tr>td:first-child{
    font-size: 12px;
    position: absolute;
    border: none;
    margin-left: -15px;
    margin-top: -10px;
}
.td{
    background: rgb(232,246,217);
}
.last{
    height: 200px;
    background: #fff;
}
.last img{
}
</style>
