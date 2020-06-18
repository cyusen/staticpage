<template>
  <div>
    <div class="head"> 
        <img class="img1" src="@/assets/images/drawable-xhdpi/jt.png" alt="" width="25px" height="25px" @click="goPersonal">
        <p>贝壳</p>
        <img class="img2" src="@/assets/images/drawable-xhdpi/bk1.png" alt="" width="30px" height="30px">
    </div>
    <div class="body">
        <img class="img3" src="@/assets/images/drawable-xhdpi/bk2.png" alt="" width="50px">
        <span>0</span>
        <button>购买贝壳</button>
        <p>贝壳兑换权益<img src="@/assets/images/drawable-xhdpi/bk3.png" alt="" width="20px"></p>
    </div>
    <div class="end">
        <p class="p1">其他获取贝壳方式</p>
        <ul>
            <img src="@/assets/images/drawable-xhdpi/bk4.png" alt="" width="20px">
            <li>打卡</li>
            <img src="@/assets/images/drawable-xhdpi/bk5.png" alt="" width="20px">
            <li>关注扇贝公众号</li>
        </ul>
        <p class="p2">看看贝壳能干吗></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Conch',
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
    padding-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
}
.img2{
    position: absolute;
    margin-top: -27px;
    margin-left: 300px;
}
p{
  margin-top: -30px;
  margin-left: 60px;
  font-size: 20px;
  color: rgb(102, 102, 102);
}
.body{
    height: 280px;
    background: rgb(238, 238, 238);}
    .img3{
        margin-left: 150px;
        margin-top: 50px;
    }
span{
    position: absolute;
    margin-top: 50px;
    color: rgb(33,159,134);
    font-weight: bold;
    font-size: 45px;
}
button{
    color: rgb(33,159,134);
    width: 250px;
    height: 45px;
    margin-top: 40px;
    margin-left: 70px;
    border: 1px solid rgb(33,159,134);
}
.body p{
    margin-top: 10px;
    margin-left: 140px;
    font-size: 14px;
    color: rgb(33,159,134);
}
.body p img{
    position: absolute;
    margin-top: -0px;
}
.end {
    height: 362px;
    background: rgb(238, 238, 238);
}
.end .p1{
    margin-left: 15px;
    font-size: 15px;
}
.end ul{
    margin-top: 20px;
}
.end img{
    margin-left: 10px;
    position: absolute;
    margin-top: 10px;
}
.end li{
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 40px;
    margin-top: 0px;
    border-bottom: 1px solid #999;
}
.end .p2{
    float: right;
    padding-right: 20px;
    margin-top: 20px;
    font-size: 14px;
     color: rgb(33,159,134);
}
</style>