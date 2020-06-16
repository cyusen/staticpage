<template>
  <div>
    <div class="one">
      <img class="img0" src="@/assets/images/drawable-xhdpi/jt.png" width="20px">
      <p>我的词库</p>
      <img class="img" src="@/assets/images/drawable-xhdpi/ck2.png" width="35px">
    </div>
    <div>
    <div class="head">
      <ul class="ul1">
        <li  @click="cur = 0" :class="{ active: cur == 0 }">
          <span class="li0">今日单词</span>
        </li>
        <li  @click="cur = 1" :class="{ active: cur == 1 }">
          <span class="li1">新的单词</span>
        </li>
        <li @click="cur = 2" :class="{ active: cur == 2 }">
          <span class="li2">正在学习</span>
        </li>
        <li  @click="cur = 3" :class="{ active: cur == 3 }">
          <span class="li3">掌握单词</span>
        </li>
      </ul>
    </div >
    <div class="show">
      <ul class="topnav-show" v-show="cur == 0">
        <ul class="ul11">
          <img class="img3" src="@/assets/images/drawable-xhdpi/ck1.png" alt="" width="25px">
          <li class="li1">clever</li>
          <li class="li2">/'klevar/</li>
          <p>释义</p>
        </ul>
        <ul class="ul11">
          <img class="img3" src="@/assets/images/drawable-xhdpi/ck1.png" alt="" width="25px">
          <li class="li1">dust</li>
          <li class="li2">/d^st/</li>
          <p>释义</p>
        </ul>
        <ul class="ul11">
          <img class="img3" src="@/assets/images/drawable-xhdpi/ck1.png" alt="" width="25px">
          <li class="li1">prove</li>
          <li class="li2">/pru:v/</li>
          <p>释义</p>
        </ul>
        <ul class="ul11">
          <img class="img3" src="@/assets/images/drawable-xhdpi/ck1.png" alt="" width="25px">
          <li class="li1">white</li>
          <li class="li2">/wait/</li>
          <p>释义</p>
        </ul>
        <ul class="ul11">
          <img class="img3" src="@/assets/images/drawable-xhdpi/ck1.png" alt="" width="25px">
          <li class="li1">negotiate</li>
          <li class="li2">/nI'goUfieTt/</li>
          <p>释义</p>
        </ul>
        <ul class="ul11">
          <img class="img3" src="@/assets/images/drawable-xhdpi/ck1.png" alt="" width="25px">
          <li class="li1">retail</li>
          <li class="li2">/'ri:teil/</li>
          <p>释义</p>
        </ul>
        <ul class="ul11">
          <img class="img3" src="@/assets/images/drawable-xhdpi/ck1.png" alt="" width="25px">
          <li class="li1">aluminum</li>
          <li class="li2">/e'lu:minem/</li>
          <p>释义</p>
        </ul>
        <ul class="ul11">
          <img class="img3" src="@/assets/images/drawable-xhdpi/ck1.png" alt="" width="25px">
          <li class="li1">submissive</li>
          <li class="li2">/seb'misiv/</li>
          <p>释义</p>
        </ul>
      </ul>
      <ul class="topnav-show" v-show="cur == 1">
        <ul class="ul11">
          <img class="img3" src="@/assets/images/drawable-xhdpi/ck1.png" alt="" width="25px">
          <li class="li1">submissive</li>
          <li class="li2">/seb'misiv/</li>
          <p>释义</p>
        </ul>
        <ul class="ul11">
          <img class="img3" src="@/assets/images/drawable-xhdpi/ck1.png" alt="" width="25px">
          <li class="li1">submissive</li>
          <li class="li2">/seb'misiv/</li>
          <p>释义</p>
        </ul>
        <ul class="ul11">
          <img class="img3" src="@/assets/images/drawable-xhdpi/ck1.png" alt="" width="25px">
          <li class="li1">submissive</li>
          <li class="li2">/seb'misiv/</li>
          <p>释义</p>
        </ul>
        <ul class="ul11">
          <img class="img3" src="@/assets/images/drawable-xhdpi/ck1.png" alt="" width="25px">
          <li class="li1">submissive</li>
          <li class="li2">/seb'misiv/</li>
          <p>释义</p>
        </ul>
      </ul>
      <ul class="topnav-show" v-show="cur == 2">
        3
      </ul>
      <ul class="topnav-show" v-show="cur == 3">
       123
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
  height: 70px;
  background:#fff;
  border-bottom: 1px solid #999;
}
.img0{
  position: absolute;
  margin-left: 10px;
  margin-top: 30px;
}
p{
  font-size: 20px;
  position: absolute;
  margin-left: 50px;
  margin-top: 26px;
}
.img{
  position: absolute;
  margin-top: 20px;
  margin-left: 320px;}
.head{
    height: 300px;
  }
  .ul1 {
    border-bottom: 1px solid #999;
    width: 375px;
      margin-top: 60px;
            display: flex;
            position: fixed;
           background: rgb(238,238,238)
        }
       .ul1 li {
            text-align: center;
            width: 25%;
            position: relative;
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 12px;
            color: rgb(184,184,184);
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
            width: 100%;
            top: 0;
            left: 0px;
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
        span:hover{
          color: rgb(44,164,139);
          font-weight: bold;
        }
  .show{
   background: rgb(238,238,238);
    height: 600px;
    margin-top: -210px;
  }
  .topnav-show{
  }
  .topnav-show div{
    padding-top: 15px;
    margin-top: -50px;
    text-align: center;
    width: 50%;
    float: left;
  }
.ul11 .img3{
  position: absolute;
  margin-left: 15px;
  margin-top: 12px;
}
.ul11{
  width: 375px;
  height: 70px;
}
.ul11 .li1{
  float: left;
  font-size: 20px;
  margin-top: 12px;
  margin-left: 50px;
}
.ul11 .li2{
  color:rgb(172,174,157);
  float: left;
  margin-top: 16px;
}
.ul11 p{
  color: rgb(31,157,132);
  font-size: 13px;
  margin-top: 35px;
}
</style>
