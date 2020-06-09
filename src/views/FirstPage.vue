<template>
  <div class="all">
    <div class="one">
      <input   class="input"  placeholder="查询英文或者中文">
      <img class="img" src="@/assets/images/drawable-xhdpi/ld.png" width="20px" height="20px">
    </div>
    <div class="two">
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
    <div class="last">-扇贝热卖-</div>
    <TabBar />
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
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
.all{
  background: gray;
}
.one{
  margin-top: -10px;
  width: 100%;
  position:fixed;
  height: 50px;
  background:#fff;
}
.input{
  position:absolute;
  margin-top: 20px;
  background: rgb(242, 242,242);
  margin-left: 20px;
  width: 330px;
  height: 30px;
}
.img{
  margin-top: 23px;
  margin-left: 375px;}
.two{
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 5px;
  height: 330px;
  background:#fff;
}
.li1{
  height: 240px;
}
span{
  position: absolute;
  margin-top: 150px;
}
.li1 li{
  margin-top: 190px;
  color: #999;
  text-align: center;
  width: 25%;
  float: left;
  list-style: none;
}
button{
  color: #fff;
  height: 40px;
  width: 130px;
  display: block;
  margin: 0 auto;
  background: rgb(31, 157, 133);
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
  margin-left: 27.5px;
}
.li2 li{
  text-align: center;
  width: 20%;
  padding-top: 70px;
  float: left;
  list-style: none;
}
.last{
  padding-top: 10px;
  color: #999;
  text-align: center;
  margin-top: 5px;
  height: 500px;
  background: #fff;
}
</style>
