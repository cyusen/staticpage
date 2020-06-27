<template>
  <div>
    <div class="one">
      <img class="img0" src="@/assets/images/drawable-xhdpi/cha.png" width="50px" @click="goFind">
      <p class="p0">你问我答</p>
    </div>
    <div class="between"></div>
    <div class="two">
       <p class="p1">belt=腰带，那below the belt=?</p>
       <p class="p2">别查词典直接选：A：破产 B：身材不加 C：暗中伤人【在评论区留下你的答案，明天公布哦~】【关注微信公众号“扇贝”，最新资讯全掌握】</p>
       <img src="@/assets/images/drawable-xhdpi/dz.png" alt="" width="100px">
    </div>
    <div class="two">
       <p class="p1">belt=腰带，那below the belt=?</p>
       <p class="p2">别查词典直接选：A：破产 B：身材不加 C：暗中伤人【在评论区留下你的答案，明天公布哦~】【关注微信公众号“扇贝”，最新资讯全掌握】</p>
       <img src="@/assets/images/drawable-xhdpi/dz.png" alt="" width="100px">
    </div>
    <div class="two">
       <p class="p1">belt=腰带，那below the belt=?</p>
       <p class="p2">别查词典直接选：A：破产 B：身材不加 C：暗中伤人【在评论区留下你的答案，明天公布哦~】【关注微信公众号“扇贝”，最新资讯全掌握】</p>
       <img src="@/assets/images/drawable-xhdpi/dz.png" alt="" width="100px">
    </div>
    <div class="two">
       <p class="p1">belt=腰带，那below the belt=?</p>
       <p class="p2">别查词典直接选：A：破产 B：身材不加 C：暗中伤人【在评论区留下你的答案，明天公布哦~】【关注微信公众号“扇贝”，最新资讯全掌握】</p>
       <img src="@/assets/images/drawable-xhdpi/dz.png" alt="" width="100px">
    </div>
    <div class="two">
       <p class="p1">belt=腰带，那below the belt=?</p>
       <p class="p2">别查词典直接选：A：破产 B：身材不加 C：暗中伤人【在评论区留下你的答案，明天公布哦~】【关注微信公众号“扇贝”，最新资讯全掌握】</p>
       <img src="@/assets/images/drawable-xhdpi/dz.png" alt="" width="100px">
    </div>
    <div class="two">
       <p class="p1">belt=腰带，那below the belt=?</p>
       <p class="p2">别查词典直接选：A：破产 B：身材不加 C：暗中伤人【在评论区留下你的答案，明天公布哦~】【关注微信公众号“扇贝”，最新资讯全掌握】</p>
       <img src="@/assets/images/drawable-xhdpi/dz.png" alt="" width="100px">
    </div>

  </div>
</template>

<script>
export default {
  name: 'Answer',
  data() {
    return {
      active: 0
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
      goFind(){
          this.$router.push('/find')
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
  margin-left: 0px;
  margin-top: 15px;
}
.p0{
  font-size: 20px;
  position: absolute;
  margin-left: 50px;
  margin-top: 26px;
}
.between{
    height: 60px;
}
.two{
    height:110px;
    border-bottom: 1px solid rgb(218, 212, 212);
}
.two .p1{
    font-weight: bold;
    margin-left: 10px;
    margin-top: 10px;
}
.two .p2{
    font-size: 13.5px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 5px;
}
.two img{
    margin-top: 5px;
    margin-left: 260px;
}
</style>
