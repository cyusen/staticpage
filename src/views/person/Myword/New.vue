<template>
  <div >
      <div class="one">
      <img class="img0"  src="@/assets/images/drawable-xhdpi/jt.png" width="20px" @click="goMessage">
      <p>新建短信</p>
      <img class="img1" src="@/assets/images/drawable-xhdpi/pencilpng.png" alt=""  width="40px" @click="goNew">
    </div>
    <div class="background">
    <div class="input">
      <input class="input1" type="text" placeholder="收件人用户名" />
      <input class="input3" type="text" placeholder="主题" />
      <textarea name id cols="30" rows="10" placeholder="内容"></textarea>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'New',
  data() {
    return {
      active: 0
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
      goMessage(){
          this.$router.push('/message')
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
.background{
    background: rgb(238,238,238);
    height: 606px;
}
.input{
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 60px;
}
.input1 {
    cursor: auto;
  width: 100%;
  margin-top: 10px;
  padding-left: 10px;
  height: 40px;
  background: #ffffff;
}
textarea {
  background: #ffffff;
  resize: none;
  padding-top: 10px;
  padding-left: 10px;
  margin-top: 30px;
  width: 100%;
  height: 200px;
}
.input3 {
  background: #ffffff;
  padding-left: 10px;
  margin-top: 30px;
  width: 100%;
  height: 40px;
}

</style>
