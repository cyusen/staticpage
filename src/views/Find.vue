<template>
<!-- 引入轮播组件-->
  <div>
    <div>
    <div class="one">
      <img class="img0" src="@/assets/images/drawable-xhdpi/ss.png" width="20px" >
      <input   class="input"  placeholder="查询英文或者中文">
      <img class="img" src="@/assets/images/drawable-xhdpi/ld.png" width="20px" height="20px" @click="goNotice" >
    </div>
    <van-sticky>
      <Carousel />
    </van-sticky>
    <div>
      <div class="three">
      <div @click="goDcs">
        <img src="@/assets/images/drawable-xhdpi/jxwz.png" alt="" width="35px" >
        <p>精选文章</p>
      </div>
      <div @click="goCk">
        <img src="@/assets/images/drawable-xhdpi/sc.png" alt="" width="35px" >
        <p>商城</p>
      </div>
      <div @click="goJd">
        <img src="@/assets/images/drawable-xhdpi/hd.png" alt="" width="35px" >
        <p>活动</p>
      </div>
      <div @click="goKzb">
        <img src="@/assets/images/drawable-xhdpi/mryj.png" alt="" width="35px" >
        <p>每日一句</p>
      </div>
    </div>
    <div class="hui"></div>
    </div>
    <div>
      <ul>
        <img class="i0" src="@/assets/images/drawable-xhdpi/sx.png" alt="" width="40px">
        <span class="span">每天学一点</span>
      </ul>
      <ul>
        <img class="i0" src="@/assets/images/drawable-xhdpi/mryj1.png" alt="" width="40px">
        <span class="span0">每日一句</span>
        <span @click="goKzb" class="span1">&rsaquo;</span>
        <img class="i1" src="@/assets/images/drawable-xhdpi/b1.png" alt="" width="70px">
        <p>The most profound statements are often said in...</p>
      </ul>
      <ul>
        <img class="i0" src="@/assets/images/drawable-xhdpi/nwwd.png" alt="" width="40px">
        <span class="span0">你问我答</span>
        <span class="span1">&rsaquo;</span>
        <img class="i1" src="@/assets/images/drawable-xhdpi/b2.png" alt="" width="70px">
        <p>metal=金属,那pedal to the metal=?</p>
      </ul>
    </div>
    <div class="hui"></div>
    <div class="head1">
      <ul class="i">
        <img class="i0" src="@/assets/images/drawable-xhdpi/sx.png" alt="" width="40px">
        <span class="span">为你推荐</span>
      </ul>
      <div class="oneall">
      <div class="one1">
      <img class="a1" src="@/assets/images/drawable-xhdpi/111.png" alt="" width="180px">
      <p>打卡挑战|7天掌握备考诀窍，赢得一战成硕徽章</p>
      </div>
      <div class="one2">
      <img class="a2" src="@/assets/images/drawable-xhdpi/222.png" alt="" width="180px"> 
      <p>狂撒考研100万补贴，祝你一战成硕！</p>
      </div>
      </div>
    </div>
    <TabBar />
  </div>
</div>
</template>

<script>
import Carousel from '../components/Carousel'
import TabBar from '../components/tabBar/TabBar'
export default {
  name: 'Find',
  data() {
    return {}
  },
  components: {
    Carousel,
    TabBar
  },
  created() {},
  mounted() {},
  methods: {
    goNotice(){
      this.$router.push('/notice')
    },
    goJd(){
      this.$router.push('/exercise')
    },
    goDcs(){
      this.$router.push('/choice')
    },
    goCk(){
      this.$router.push('/shop')
    },
     goKzb(){
      this.$router.push('/every')
    },
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.img0{
  position: absolute;
  margin-left: 25px;
  margin-top: 35px;
}
.one{
  position: fixed;
  top: 0;
  margin-top: -10px;
  width: 100%;
  height: 80px;
  background:#fff;
  border-bottom: 1px solid #999;
}
.input{
  padding-left: 30px;
  margin-top: 30px;
  background: rgb(242, 242,242);
  margin-left: 20px;
  width: 310px;
  height: 30px;
}
.img{
  position: absolute;
  margin-top: 33px;
  margin-left: 10px;}
.three{
  margin-top: 0px;
  height: 80px;
  background: white;
}
.three div{
  text-align: center;
  padding-top: 15px;
  width: 25%;
  float: left;
}
.hui{
  height: 10px;
  background: rgb(242, 242,242);
}
ul{
  padding-top: 30px;
  padding-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  border-bottom: 1px solid #999;
}
div  :last-child{
  color: black;
  border-bottom: 0px;
}
ul .i0{
  position: absolute;
  margin-top: -25px;
  margin-left: -10px;
}
ul .span{
  position: absolute;
  font-size: 20px;
  font-weight: bolder;
  margin-top: -18px;
  margin-left: 20px;
}
ul .span0{
  position: absolute;
  margin-top: -15px;
  margin-left: 40px;
}
ul .span1{
  position: absolute;
  margin-top: -15px;
  margin-left: 120px;
}
ul p{
  margin-top: 20px;
  padding-left: 0px;
}
ul .i1{
  float: right;
  margin-top: -40px;
  margin-right: 10px;
}
.head1{
  height: 250px;
}
 .i{
  border-bottom: 0px;
}
.oneall div{
  float: left;
  width: 50%;
  text-align: center;
}
.oneall p{
  width: 50%;
  position: absolute;
  font-size: 15px;
}

</style>
