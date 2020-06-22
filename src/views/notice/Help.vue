<template>
  <div>
   <div class="one">
      <img class="img0" src="@/assets/images/drawable-xhdpi/jt.png" width="20px" @click="goPersonal">
      <p>帮助</p>
      <span>反馈</span>
    </div>
    <div class="two">
        <img class="img1" src="@/assets/images/drawable-xhdpi/ss.png" width="20px">
        <input type="text" placeholder="遇到了什么问题呢？">
        <p>取消</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Help',
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
span{
    position: absolute;
    font-size: 14px;
    margin-left: 320px;
    margin-top: 30px;
}
.two{
    height: 100px;
    border-bottom: 1px solid #999;
}
input{
    margin-top: 68px;
    padding-left: 30px;
    height: 25px;
    width: 300px;
    margin-left: 10px;
    background: rgb(238,238,238);
    border-radius: 50px;
}
.two p{
    position: absolute;
    color: rgb(33,159,134);
    margin-top: -25px;
    font-size: 16px;
    margin-left: 330px;
}
.img1{position: absolute;
    margin-top: 69px;
    margin-left: 15px;
}
</style>
