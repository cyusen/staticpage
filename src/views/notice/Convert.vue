<template>
  <div>
    <div class="head"> 
        <img src="@/assets/images/drawable-xhdpi/jt.png" alt="" width="25px" height="25px" @click="goPersonal">
        <p>我的课程</p>
        <img class="img" src="@/assets/images/drawable-xhdpi/sys.png" alt="" width="35px" height="35px">
    </div>
    <div class="all">
        <img src="@/assets/images/drawable-xhdpi/head.png" alt="" width="375px" >
        <input type="text" placeholder="输入兑换码">
        <button>兑换</button>
    </div>    
        <p class="p1">兑换码是扇贝和合作伙伴联合发行的礼券，可以用来兑换相应的礼品。</p>
    
  </div>
</template>

<script>
export default {
  name: 'Convert',
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
      this.$router.push('/personal')
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
    border-bottom: 1px solid rgb(211, 203, 203);
}
.img{
    position: absolute;
    margin-left: 300px;
    margin-top: -30px;
}
.head p{
  margin-top: -30px;
  margin-left: 60px;
  font-size: 20px;
  color: rgb(102, 102, 102);
}
.all{
    text-align: center;
}
input{
    margin-top: 35px;
    width: 300px;
    height: 35px;
    text-align: center;

    border: 1px solid #999;
}
button{
    position: absolute;
    margin-top: 80px;
    background: #fff;
    margin-left: -300px;
    width: 300px;
    height: 35px;
    border:1px solid rgb(33,159,134);
}
.p1{
    margin-top: 80px;
    margin-left: 33px;
    margin-right: 30px;
    font-size: 15px
}
</style>
