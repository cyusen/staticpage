<template>
  <div>
    <div class="one">
      <img class="img0" src="@/assets/images/drawable-xhdpi/jt.png" width="25px" @click="goFirstpage">
      <p class="p0">选择短语书</p>
    </div>
    <div class="between"></div>
    <div class="two">
      <img src="@/assets/images/drawable-xhdpi/first1.png" alt="" width="70px">
      <p class="p1">四级核心短语（下）</p>
      <p class="p2">共<span>511</span>个短语</p>
    </div>
    <div class="two">
      <img src="@/assets/images/drawable-xhdpi/first2.png" alt="" width="70px">
      <p class="p1">四级核心短语（下）</p>
      <p class="p2">共<span>511</span>个短语</p>
    </div>
    <div class="two">
      <img src="@/assets/images/drawable-xhdpi/first3.png" alt="" width="70px">
      <p class="p1">四级核心短语（下）</p>
      <p class="p2">共<span>511</span>个短语</p>
    </div>
    <div class="two">
      <img src="@/assets/images/drawable-xhdpi/first4.png" alt="" width="70px">
      <p class="p1">四级核心短语（下）</p>
      <p class="p2">共<span>511</span>个短语</p>
    </div>
    <div class="two">
      <img src="@/assets/images/drawable-xhdpi/first5.png" alt="" width="70px">
      <p class="p1">四级核心短语（下）</p>
      <p class="p2">共<span>511</span>个短语</p>
    </div>
    <div class="two">
      <img src="@/assets/images/drawable-xhdpi/first6.png" alt="" width="70px">
      <p class="p1">四级核心短语（下）</p>
      <p class="p2">共<span>511</span>个短语</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Choose',
  data() {
    return {
      active: 0
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    goFirstpage(){
      this.$router.push('/firstpage')
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
  border-bottom: 1px solid rgb(238, 238, 238);
}
.img0{
  position: absolute;
  margin-left: 20px;
  margin-top: 27px;
}
.p0{
  font-size: 20px;
  position: absolute;
  margin-left: 60px;
  margin-top: 26px;
}
.between{
  height: 60px;
}
.two{
  float: right;
  width: 50%;
  height: 200px;
  text-align: center;
  border-right: 1px solid rgb(238, 238, 238);
  border-bottom: 1px solid rgb(238, 238, 238);
}
.two img{
  margin-top: 20px;
}
.two .p1{
  margin-top: 15px;
}
.two .p2{
  font-size: 12px;
  color: #999;
}
.two .p2 span{
  color: rgb(41, 190, 160);
}
</style>
