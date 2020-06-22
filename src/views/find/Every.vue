<template>
  <div class="all">
      <img class="img" src="@/assets/images/drawable-xhdpi/bc.jpg" width="375px">
    <div class="one">
      <img class="img0" src="@/assets/images/drawable-xhdpi/jt.png" width="30px" @click="goPersonal">
      <img class="img1" src="@/assets/images/drawable-xhdpi/share.png" alt=""  width="35px" >
    </div>
    <div class="two">
        <p class="p1">21</p>
        <p class="p2">Jun.2020</p>
        <p class="p3">Dads are most ordinary men turned by love into heroes, story-tellers,and singers of songs.</p>
        <p class="p4">父亲们不过是群普通人，但爱让他们化身英雄、探险家、故事家和歌者。</p>
        <p class="p5">-Pam Brown</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Every',
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
          this.$router.push('/find');
      }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.all{
  background: src('@/assets/images/drawable-xhdpi/bc.png') no-repeat;
 }
.one{
  position: fixed;
  top: 0;
  margin-top: -10px;
  width: 100%;
  height: 70px;}
.img0{
  position: absolute;
  margin-left: 15px;
  margin-top: 30px;
}
.img1{
  position: absolute;
  margin-left: 320px;
  margin-top: 30px;
}
.two{
    position: absolute;
    margin-top: -220px;
}
.p1{
    font-size: 35px;
    color: rgb(57,194,165);
    padding-left: 10px;
}
.p2{
    color: rgb(57,194,165);
    margin-top: -20px;
    margin-left: 60px;
}
.p3{
    font-size: 20px;
    margin-left: 10px;
    margin-right: 10px;
    color: #fff;
}
.p4{
    margin-left: 10px;
    margin-right: 10px;
    color: #fff;
    margin-top: 10px;
    font-size: 14px;
}
.p5{
    margin-left: 280px;
    color: #fff
}
</style>
