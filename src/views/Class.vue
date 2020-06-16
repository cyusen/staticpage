<template>
  <div>
    <div class="one">
      <input   class="input" placeholder="查询英文或者中文">
      <img class="img" src="@/assets/images/drawable-xhdpi/ld.png" width="20px" height="20px">
    </div>
    <div>
    <div class="head">
      <ul class="ul1">
        <li  @click="cur = 0" :class="{ active: cur == 0 }">
          <span class="li0">精选</span>
        </li>
        <li  @click="cur = 1" :class="{ active: cur == 1 }">
          <span class="li1">四六级考研</span>
        </li>
        <li @click="cur = 2" :class="{ active: cur == 2 }">
          <span class="li2">阅读</span>
        </li>
        <li  @click="cur = 3" :class="{ active: cur == 3 }">
          <span class="li3">听力口语</span>
        </li>
        <li  @click="cur = 4" :class="{ active: cur == 4 }">
          <span class="li4">编程</span>
        </li>
      </ul>
    </div >
    <div class="show">
      <ul class="topnav-show" v-show="cur == 0">
        <div>
          <img src="@/assets/images/drawable-xhdpi/yd5.png" alt="" width="190px">
          <p class="p1">今年最低加|只需0.8元/天，听说读写全面提升</p>
          <p class="p2">"九周年回馈，仅此一次!"</p>
          <p class="p3">¥299</p>
        </div>
        <div>
           <img src="@/assets/images/drawable-xhdpi/ky5.png" alt="" width="190px">
           <p class="p1">考研英语训练营|摆脱备考困境，提速领先对手</p>
           <p class="p2">"英一、英二均已上线!"</p>
           <p class="p3">¥599</p>
        </div>
        <div>
          <img src="@/assets/images/drawable-xhdpi/ky6.png" alt="" width="190px">
          <p class="p1">四六级训练营|现在准备，高分过级！</p>
          <p class="p2">"课程适用于7月和9考试!"</p>
          <p class="p3">¥149</p>
        </div>
        <div>
          <img src="@/assets/images/drawable-xhdpi/tl3.png" alt="" width="190px">
          <p class="p1">365计划|养成终生好习惯，得限定礼盒</p>
          <p class="p2">"坚持都变得更容易了!"</p>
          <p class="p3">¥59</p>
        </div>
        <div>
          <img src="@/assets/images/drawable-xhdpi/tl6.png" alt="" width="190px">
          <p class="p1">单词会员|最低0.1/天，全场单词书免费学</p>
          <p class="p2">"四大特权轻松享！"</p>
          <p class="p3">¥109</p>
        </div>
        <div>
          <img src="@/assets/images/drawable-xhdpi/yd4.png" alt="" width="190px">
          <p class="p1">Python体验课|提高职场竞争力，office接到你手软</p>
          <p class="p2">"offer到手，轻松毕业不用..."</p>
          <p class="p3">¥6.9</p>
        </div>
      </ul>
      <ul class="topnav-show" v-show="cur == 1">
        <div>
          <img src="@/assets/images/drawable-xhdpi/ky1.png" alt="" width="190px">
          <p class="p1">四六级训练因|现在准备，高分过及！</p>
          <p class="p2">"课程是用于7月和九月考试"</p>
          <p class="p3">¥149</p>
        </div>
        <div>
           <img src="@/assets/images/drawable-xhdpi/ky2.png" alt="" width="190px">
           <p class="p1">考研英语训练营|备考不低效，此战必上岸</p>
           <p class="p2">"英一、英二均已上线!"</p>
           <p class="p3">¥599</p>
        </div>
        <div>
          <img src="@/assets/images/drawable-xhdpi/ky3.png" alt="" width="190px">
          <p class="p1">考研7天训练营|不可不知的备考诀窍</p>
          <p class="p2">"英一英二皆可购买"</p>
          <p class="p3">¥149</p>
        </div>
        <div>
          <img src="@/assets/images/drawable-xhdpi/ky4.png" alt="" width="190px">
          <p class="p1">考研百万补贴，最高可领140元</p>
          <p class="p2">"九周年特别活动"</p>
          <p class="p3">¥59</p>
        </div>
        <div>
          <img src="@/assets/images/drawable-xhdpi/ky5.png" alt="" width="190px">
          <p class="p1">单词会员|最低0.1/天，全场单词书免费学</p>
          <p class="p2">"四大特权轻松享！"</p>
          <p class="p3">¥0.1</p>
        </div>
        <div>
          <img src="@/assets/images/drawable-xhdpi/ky6.png" alt="" width="190px">
          <p class="p1">打卡返学费|一起逆袭听力/p>
          <p class="p2">"offer到手，轻松毕业不用..."</p>
          <p class="p3">¥6.9</p>
        </div>
      </ul>
      <ul class="topnav-show" v-show="cur == 2">
        <div>
          <img src="@/assets/images/drawable-xhdpi/yd1.png" alt="" width="190px">
          <p class="p1">今年最低加|只需0.8元/天，听说读写全面提升</p>
          <p class="p2">"九周年回馈，仅此一次!"</p>
          <p class="p3">¥299</p>
        </div>
        <div>
           <img src="@/assets/images/drawable-xhdpi/yd2.png" alt="" width="190px">
           <p class="p1">考研英语训练营|摆脱备考困境，提速领先对手</p>
           <p class="p2">"英一、英二均已上线!"</p>
           <p class="p3">¥599</p>
        </div>
        <div>
          <img src="@/assets/images/drawable-xhdpi/yd3.png" alt="" width="190px">
          <p class="p1">四六级训练营|现在准备，高分过级！</p>
          <p class="p2">"课程适用于7月和9考试!"</p>
          <p class="p3">¥149</p>
        </div>
        <div>
          <img src="@/assets/images/drawable-xhdpi/yd4.png" alt="" width="190px">
          <p class="p1">365计划|养成终生好习惯，得限定礼盒</p>
          <p class="p2">"坚持都变得更容易了!"</p>
          <p class="p3">¥59</p>
        </div>
        <div>
          <img src="@/assets/images/drawable-xhdpi/yd5.png" alt="" width="190px">
          <p class="p1">单词会员|最低0.1/天，全场单词书免费学</p>
          <p class="p2">"四大特权轻松享！"</p>
          <p class="p3">¥109</p>
        </div>
        <div>
          <img src="@/assets/images/drawable-xhdpi/yd6.png" alt="" width="190px">
          <p class="p1">Python体验课|提高职场竞争力，office接到你手软</p>
          <p class="p2">"offer到手，轻松毕业不用..."</p>
          <p class="p3">¥6.9</p>
        </div>
      </ul>
      <ul class="topnav-show" v-show="cur == 3">
        <div>
          <img src="@/assets/images/drawable-xhdpi/tl1.png" alt="" width="190px">
          <p class="p1">今年最低加|只需0.8元/天，听说读写全面提升</p>
          <p class="p2">"九周年回馈，仅此一次!"</p>
          <p class="p3">¥299</p>
        </div>
        <div>
           <img src="@/assets/images/drawable-xhdpi/tl2.png" alt="" width="190px">
           <p class="p1">考研英语训练营|摆脱备考困境，提速领先对手</p>
           <p class="p2">"英一、英二均已上线!"</p>
           <p class="p3">¥599</p>
        </div>
        <div>
          <img src="@/assets/images/drawable-xhdpi/tl3.png" alt="" width="190px">
          <p class="p1">四六级训练营|现在准备，高分过级！</p>
          <p class="p2">"课程适用于7月和9考试!"</p>
          <p class="p3">¥149</p>
        </div>
        <div>
          <img src="@/assets/images/drawable-xhdpi/tl4.png" alt="" width="190px">
          <p class="p1">365计划|养成终生好习惯，得限定礼盒</p>
          <p class="p2">"坚持都变得更容易了!"</p>
          <p class="p3">¥59</p>
        </div>
        <div>
          <img src="@/assets/images/drawable-xhdpi/tl5.png" alt="" width="190px">
          <p class="p1">单词会员|最低0.1/天，全场单词书免费学</p>
          <p class="p2">"四大特权轻松享！"</p>
          <p class="p3">¥109</p>
        </div>
        <div>
          <img src="@/assets/images/drawable-xhdpi/tl6.png" alt="" width="190px">
          <p class="p1">Python体验课|提高职场竞争力，office接到你手软</p>
          <p class="p2">"offer到手，轻松毕业不用..."</p>
          <p class="p3">¥6.9</p>
        </div>
      </ul>
      <ul class="topnav-show" v-show="cur == 4">
       123
      </ul>
    </div>
    </div>
    <TabBar />
  </div>
</template>

<script>
import TabBar from '../components/tabBar/TabBar'
export default {
  name: 'Class',
  data() {
    return {cur:0}
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
.head{
    height: 300px;
  }
  .ul1 {width: 375px;
      margin-top: 70px;
            display: flex;
            position: fixed;
           background: #fff
        }
       .ul1 li {
            text-align: center;
            width: 25%;
            position: relative;
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 12px;
            color: #000;
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
            border-bottom: 2px solid rgb(255, 255, 255);
            transition: 0.2s all linear;
        }

        li:hover::before {
            width: 80%;
            top: 0;
            left: 10px;
            transition-delay: 0.1s;
            border-bottom-color: rgb(28, 224, 110);
            z-index: 1;
        }
        li:hover ~ li::before {
            left: 0;
        }

        li:active {
            background: rgb(255, 255, 255);
            color: #fff;
        }
        span:hover{
          font-weight: bold;
        }
  .show{
   
    height: 100px;
    margin-top: -190px;
  }
  .topnav-show{
     height: 1600px;
  }
  .topnav-show div{
    padding-top: 15px;
    margin-top: -50px;
    text-align: center;
    width: 50%;
    float: left;
  }
.p1{
  margin-top: -30px;
  text-align: left;
  margin-left: 20px;
  margin-right: 12px;
  font-size: 13px;
}
.p2{
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 30px;
  text-align: left;
  background: rgb(241,242,246);
  font-size: 11px;
}
.p3{
  margin-top: 5px;
  margin-left: 15px;
  text-align: left;
  color: rgb(41,194,162);
}
</style>
