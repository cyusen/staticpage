<template>
  <div>
    <div class="one">
      <img class="img0" src="@/assets/images/drawable-xhdpi/jt.png" width="20px" @click="goPersonal">
      <p>短信</p>
      <img class="img1" src="@/assets/images/drawable-xhdpi/pencilpng.png" alt=""  width="40px" @click="goNew">
    </div>
    <div>
    <div class="head">
      <ul class="ul1">
        <li  @click="cur = 0" :class="{ active: cur == 0 }">
          <span class="li0">我的短信</span>
        </li>
        <li  @click="cur = 1" :class="{ active: cur == 1 }">
          <span class="li1">系统消息</span>
        </li>
      </ul>
    </div >
    <div class="show">
      <ul class="topnav-show" v-show="cur == 0">
          <div>
              <img src="@/assets/images/drawable-xhdpi/xx.png" alt=""  width="100px">
              <p>暂时没有短信<span>发短信</span></p>
        </div>
      </ul>
      <ul class="topnav-show" v-show="cur == 1">
          <div> </div>
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
    goNew(){
      this.$router.push('/new')
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
    margin-left: 320px;
    margin-top: 20px;
    }
p{
  font-size: 20px;
  position: absolute;
  margin-left: 50px;
  margin-top: 26px;
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
           background: rgb(238,238,238);
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
            left: 0;
            width: 0;
            height: 98%;
            border-bottom: 2px solid rgb(0, 0, 0);
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
span:hover{
    color: rgb(44,164,139);
}
        li:active {
            background: rgb(255, 255, 255);
            color: #fff;
        }
  .show{
   background: rgb(238,238,238);
    height: 600px;
    margin-top: -210px;
  }
  .show img{
      margin-top: 100px;
  }
  .topnav-show div{
    padding-top: 15px;
    margin-top: 0px;
    text-align: center;
    font-size: 12px;
    color: #999;
  }
.show div p{
    color: #000;
    font-size: 16px;
    padding-left:60px ;
}
.show div span{
    font-size: 16px;
    padding-left:10px ;
    color: rgb(44,164,139);
}

</style>
