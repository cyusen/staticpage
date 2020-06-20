<template>
  <div>
    <div class="one">
      <img class="img0" src="@/assets/images/drawable-xhdpi/jt.png" width="20px" @click="goPersonal">
      <p>活动</p>
    </div>
    <div>
    <div class="head">
      <ul class="ul1">
        <li  @click="cur = 0" :class="{ active: cur == 0 }">
          <span class="li0">全部</span>
        </li>
        <li  @click="cur = 1" :class="{ active: cur == 1 }">
          <span class="li1">我的</span>
        </li>
      </ul>
    </div >
    <div class="show">
      <ul class="topnav-show" v-show="cur == 0">
          <div>
        <img class="img1" src="@/assets/images/drawable-xhdpi/qb1.png" >
        <p class="span1">打卡挑战|以书为海，以梦为马，赢东京电子书月卡</p>
        <img class="img2" src="@/assets/images/drawable-xhdpi/qb2.png" >
        <p class="span2">考研抢分大作战|狂撒百万补贴，每人最高可领140元！</p>
        <img class="img3" src="@/assets/images/drawable-xhdpi/qb3.png" >
        <p class="span3">考研打卡挑战|完成挑战，有机会得599元免单奖励</p>
        <img class="img4" src="@/assets/images/drawable-xhdpi/qb4.png" >
        <p class="span4">打卡挑战|以书为海，以梦为马，赢东京电子书月卡</p>
        </div>
      </ul>
      <ul class="topnav-show" v-show="cur == 1">
          <div> 到底了</div>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Myword',
  data() {
    return {cur:0}
  },
  components: {
  },
  created() {},
  mounted() {},
  methods: {
    goPersonal(){
      this.$router.push('/personal')
    },
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.one{
  position: fixed;
  top: 0;
  margin-top: -10px;
  width: 100%;
  height: 70px;
  background:#fff;
  border-bottom: 1px solid #999;
}
.img0{
  position: absolute;
  margin-left: 10px;
  margin-top: 30px;
}
.img1{
  margin-left: px;
  margin-top: -30px;
}
.img2{
  margin-left: 0px;
  margin-top:-30px;
}
.img3{
  margin-left:0px;
  margin-top: -30px;
}
.img4{
  margin-left: 0px;
  margin-top:-30px;
}
p{
  font-size: 20px;
  position: absolute;
  margin-left: 50px;
  margin-top: 26px;
}
.span1{
    color: #000;
    font-size: 15px;
    margin-left: 20px;
    margin-top: -25px;  
}
.span2{
  color: #000;
    font-size: 15px;
    margin-left: 20px;
    margin-top: -25px;
}
.span3{
   color: #000;
    font-size: 15px;
    margin-left: 20px;
    margin-top: -25px;
}
.span4{
    color: #000;
    font-size: 15px;
    margin-left: 20px;
    margin-top: -25px;
}
.head{
    height: 300px;
  }
  .ul1 {
    border-bottom: 1px solid #999;
    width: 375px;
      margin-top: 60px;
            display: flex;
            position: fixed;
           background: rgb(255, 255, 255)
        }
       .ul1 li {
            text-align: center;
            width: 50%;
            position: relative;
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 12px;
            color: rgb(0, 0, 0);
            line-height: 1;
            transition: 0.2s all linear;
            cursor: pointer;
            list-style: none;
        }
    li::before {
            content: "";
            position: absolute;
            top: 0;
            left: 100%;
            width: 0;
            height: 98%;
            border-bottom: 2px solid rgb(0, 0, 0);
            transition: 0.2s all linear;
        }
        li:hover::before {
            width: 10%;
            top: 0;
            left: 85px;
            transition-delay: 0.1s;
            border-bottom-color: rgb(44,164,139);
            z-index: 1;
        }
        li:hover ~ li::before {
            left: 0;
        }

        li:active {
            background: rgb(255, 255, 255);
            color: #fff;
        }
  .show{
   background: rgb(255, 255, 255);
    height: 600px;
    margin-top: -210px;
  }
  .topnav-show{
  }
  .topnav-show div{
    padding-top: 15px;
    margin-top: 0px;
    text-align: center;
    font-size: 12px;
    color: #999;
  }


</style>
