<template>
  <div>
    <div class="show">
      <ul class="topnav-show" v-show="cur == 0">
        <div class="head0">
            <img src="@/assets/images/drawable-xhdpi/cha.png" alt="" width="50px" @click="goFind">
            <p>扇贝商城</p>
        </div>
        <img class="head2" src="@/assets/images/drawable-xhdpi/find.png" alt="" width="375px">
        <div class="three">
            <div><img src="@/assets/images/drawable-xhdpi/xwj.png" alt="" width="70px">
            <p @click="goPencil">小文具</p></div>
            <div><img src="@/assets/images/drawable-xhdpi/bksj.png" alt="" width="70px">
            <p @click="goBook">备考书籍</p></div>
            <div><img src="@/assets/images/drawable-xhdpi/qbsp.png" alt="" width="70px">
            <p @click="goThings">全部商品</p></div>
        </div>
        <img class="img" src="@/assets/images/drawable-xhdpi/sbsc.png" alt="" width="375px" > <img class="img" src="@/assets/images/drawable-xhdpi/sbsc.png" alt="" width="375px" >
      </ul>
      <ul class="topnav-show" v-show="cur == 1"> 
        <div class="head0">
            <img src="@/assets/images/drawable-xhdpi/cha.png" alt="" width="50px" @click="goFind">
            <p>购物车</p>
            <img class="head2" src="@/assets/images/drawable-xhdpi/gwc11.png" alt="" width="375px">
        </div>
      </ul>
      <ul class="topnav-show" v-show="cur == 2">
          <div class="head0">
            <img src="@/assets/images/drawable-xhdpi/cha.png" alt="" width="50px" @click="goFind">
            <p>扇贝商城</p>
            <img  class="head2" src="@/assets/images/drawable-xhdpi/head1.png" alt="" width="375px">
            <ul>
                <li>我的订单 <span>&rsaquo;</span></li>
                <div class="two">
            <div><img src="@/assets/images/drawable-xhdpi/dsk.png" alt="" width="50px">
            <p>待付款</p></div>
            <div><img src="@/assets/images/drawable-xhdpi/dfh.png" alt="" width="50px">
            <p>代发货</p>
            </div>
            <div><img src="@/assets/images/drawable-xhdpi/dsh.png" alt="" width="50px">
            <p>待收货</p>
            </div>
            <div><img src="@/assets/images/drawable-xhdpi/ywc.png" alt="" width="50px">
            <p>已完成</p>
            </div>
        </div>
        </ul>
        <ul class="ul">
                <li>历史订单<span>&rsaquo;</span></li>
                <li>我的代金券<span>&rsaquo;</span></li>
                <li>我的收货地址<span>&rsaquo;</span></li>
            </ul>
        </div>
      </ul>
    </div>
    <div class="head">
      <ul class="ul1">
        <li  @click="cur = 0" :class="{ active: cur == 0 }">
            <img src="@/assets/images/drawable-xhdpi/sy2.png" alt="" width="30px">
          <p class="li0">首页</p>
        </li>
        <li  @click="cur = 1" :class="{ active: cur == 1 }">
            <img src="@/assets/images/drawable-xhdpi/gwc2.png" alt="" width="30px">
          <p class="li1">购物车</p>
        </li>
        <li @click="cur = 2" :class="{ active: cur == 2 }">
            <img src="@/assets/images/drawable-xhdpi/my3.png" alt="" width="30px">
          <p class="li2">我的</p>
        </li>
      </ul>
  </div>
  
  </div>
</template>

<script>
export default {
  name: 'Shop',
  data() {
    return {
      cur:0
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
  goFind(){
          this.$router.push('/find')
          },
  goPencil(){
          this.$router.push('/pencil')
  },
  goBook(){
          this.$router.push('/book')
  },
  goThings(){
          this.$router.push('/things')
  },
  },
  
  computed: {}
}
</script>

<style scoped lang="scss">
.head0{
    position: fixed;
    width: 100%;
    background: #fff;
    height: 50px;
}
.head0 p{
    color: #999;
    font-weight: bold;
    margin-top: -40px;
    margin-left: 70px;
}

  .ul1 {
      margin-top: -25px;
    border-bottom: 1px solid #999;
    width: 375px;
    display: flex;
    position: fixed;
    background: rgb(255, 255, 255)
        }
       .ul1 li {
            text-align: center;
            width: 33%;
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
            border-bottom: 2px solid rgb(238,238,238);
            transition: 0.2s all linear;
        }
        img :hover{
          
        }
        p:hover{
          color: rgb(44,164,139);
        }
  .show{
   background: rgb(238,238,238);
    height: 635px;
  }
  .three div{
      margin-top: -5px;
      background: #fff;
      text-align: center;
      float: left;
      width: 33.3%;
  }
  .three div p{
      margin-left: -5px;
      font-size: 14px;
      margin-top: -15px;
  }
  .two div{
      border-top: 1px solid rgb(218, 211, 211);
      height: 80px;
      margin-top: -5px;
      padding-top: 15px;
      background: #fff;
      text-align: center;
      float: left;
      width: 25%;
  }
  .two div p{
      font-weight: normal;
      color: #000;
      margin-left: -5px;
      font-size: 12px;
      margin-top: -15px;
  }
   .img{
      margin-top: 10px;
  }
  .head2{
      margin-top: 17px;
  }
  .head0 .ul{
      margin-top: 100px;
  }
  .head0 ul li{
      line-height: 40px;
      padding-left: 10px;
      background: #fff;
      margin-top: 15px;
      height: 40px;
  }
  .head0 ul li span{
      float: right;
      padding-right: 10px;
  }
  
</style>
