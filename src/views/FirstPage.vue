<template>
<div>
<div class="one">
      <input   class="input" placeholder="查询英文或者中文">
      <img class="img" src="@/assets/images/drawable-xhdpi/ld.png" width="20px" height="20px" @click="goNotice">
    </div>
  <div class="all">
    <div class="cc"></div>
    
    <div class="two">
      <div class="hi" >
      <img src="@/assets/images/drawable-xhdpi/hi.png" alt="" width="200px">
    </div>
      <ul class="li1">
        <span>80</span>
      <li>新单词</li>
      <span>80</span>
      <li>今日单词</li>
      <span>80</span>
      <li>剩余单词</li>
      <span>80</span>
      <li>我的单词</li>
      </ul>
      <div>
      <button>开始学习</button>
      </div>
    </div>
    <div class="three">
      <ul class="li2">
        <img class="img1" src="@/assets/images/drawable-xhdpi/ky.png" height="30px" width="30px">
      <li>口语</li>
      <img class="img1" src="@/assets/images/drawable-xhdpi/tl.png" height="30px" width="30px">
      <li>听力</li>
      <img class="img1" src="@/assets/images/drawable-xhdpi/yd.png" height="30px" width="30px">
      <li>阅读</li>
      <img class="img1" src="@/assets/images/drawable-xhdpi/dj.png" height="30px" width="30px">
      <li>短语</li>
      <img class="img1" src="@/assets/images/drawable-xhdpi/lj.png" height="30px" width="30px">
      <li>炼句</li>
      </ul>
    </div>
    <div class="last">
    <div >-扇贝热卖-</div>
    <div>
      <ul>
      <img class="img2" src="@/assets/images/drawable-xhdpi/t1.png" alt="" width="120px" height="145px">
      <img class="img2" src="@/assets/images/drawable-xhdpi/t2.png" alt="" width="120px" height="145px">
      <img class="img2" src="@/assets/images/drawable-xhdpi/t3.png" alt="" width="120px" height="145px">
      </ul>
    </div>
    </div>
    <TabBar />
  </div>
  </div>
</template>

<script>
import TabBar from '../components/tabBar/TabBar'
export default {
  name: 'FirstPage',
  data() {
    return {}
  },
  components: {
    TabBar
  },
  created() {},
  mounted() {},
  methods: {
    goNotice(){
      this.$router.push('/notice')
    },
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.all{
  background: rgb(236, 233, 233);
}
.cc{
  height: 1px;
  margin-top: 70px;
  background: rgb(236, 233, 233);
}
.hi{
  height: 130px;
  background: #fff;
  padding-top: 20px;
  text-align: center;
  border-bottom: 1px solid #999;
}
.one{
  position: fixed;
  top: 0;
  margin-top: -10px;
  width: 100%;
  height: 80px;
  background:#fff;
}
.input{
  padding-left: 30px;
  position:absolute;
  margin-top: 30px;
  background: rgb(242, 242,242);
  margin-left: 20px;
  width: 300px;
  height: 30px;
}
.img{
  margin-top: 33px;
  margin-left: 335px;}
.two{
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 5px;
  height: 320px;
  background:#fff;
}

span{
  position: absolute;
  padding-top: 35px;
  padding-left: 28px;
  font-size: 30px;
  color: rgb(114, 108, 108);
  font-weight: bold;
}
.li1{
  height: 115px;
}
.li1 li{
  color: #999;
  font-size: 13px;
  text-align: center;
  width: 25%;
  padding-top: 70px;
  float: left;
  list-style: none;
}
button{
  color: #fff;
  height: 40px;
  width: 130px;
  display: block;
  margin: 0 auto;
  background: rgb(41, 190, 160);
  border-radius: 40px;
}
.three{
  margin-top: 5px;
  width: 100%;
  height: 110px;
  background: #fff;
}
.img1{
  position:absolute;
  margin-top: 30px;
  margin-left: 30px;
}
.li2 li{
  text-align: center;
  width: 20%;
  padding-top: 65px;
  float: left;
  list-style: none;
}
.last{
  padding-top: 10px;
  color: #999;
  text-align: center;
  margin-top: 5px;
  height: 250px;
  background: #fff;
}
.img2{
  
  margin-left:0px;
}
</style>
