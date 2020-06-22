<template>
  <div>
   <div class="one">
      <img class="img0" src="@/assets/images/drawable-xhdpi/cha.png" width="60px" @click="goPersonal">
      <p>精选</p>
      <img class="img1" src="@/assets/images/drawable-xhdpi/share.png" width="40px" >
    </div>
    <div class="one1"> </div>
    <div class="two">
        <div class="head">
        <p class="p1">这个特殊的春节，给你留下了怎样的记忆？</p>
        <p class="p2">冬天不会永久长存，春天总会如期而至>></p>
        <img src="@/assets/images/drawable-xhdpi/sb.png" alt="" width="150px">
        </div>
        <div class="end">
            <p class="p1">02月05日</p>
            <img src="@/assets/images/drawable-xhdpi/dz.png" alt="" width="100px">
        </div>
        <div class="last"></div>
    </div>
    <div class="two">
        <div class="head">
        <p class="p1">这个特殊的春节，给你留下了怎样的记忆？</p>
        <p class="p2">冬天不会永久长存，春天总会如期而至>></p>
        <div>
        <img src="@/assets/images/drawable-xhdpi/sb.png" alt="" width="150px">
        </div>
        </div>
        <div class="end">
            <p class="p1">02月05日</p>
            <img src="@/assets/images/drawable-xhdpi/dz.png" alt="" width="100px">
        </div>
        <div class="last"></div>
    </div>
    <div class="two">
        <div class="head">
        <p class="p1">这个特殊的春节，给你留下了怎样的记忆？</p>
        <p class="p2">冬天不会永久长存，春天总会如期而至>></p>
        <img src="@/assets/images/drawable-xhdpi/sb.png" alt="" width="150px">
        </div>
        <div class="end">
            <p class="p1">02月05日</p>
            <img src="@/assets/images/drawable-xhdpi/dz.png" alt="" width="100px">
        </div>
        <div class="last"></div>
    </div>
    <div class="ee">
        <img src="@/assets/images/drawable-xhdpi/end.png" alt="" width="375">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Choice',
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
          this.$router.push('/Find')
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
.one1{
    margin-top: 70px;
}
.img0{
  position: absolute;
  margin-left: 0px;
  margin-top: 10px;
}
.img1{
  position: absolute;
  margin-left: 310px;
  margin-top: 20px;
}
.one p{
  font-size: 20px;
  position: absolute;
  margin-left: 50px;
  margin-top: 26px;
}
.two{
    margin-top: 10px;
}
.two .p1{
    font-size: 21px
}
.two .p2{
    color: #999;
    margin-top: 10px;
    font-size: 15px
}
.two img{
  position: absolute;
    
    }
.two .head{
    width: 50%;
    margin-left: 20px;
    margin-top: 0px;}
.head img {
    margin-top: -130px;
    margin-left: 190px;
}
.two .end p{
    float: left;
    margin-top: 30px;
}
.two .end .p1{
    color: #999;
    font-size: 15px;
    margin-top: 5px;
    margin-left: 20px;
}
.end img{
    margin-top: 10px;
    margin-left: 165px;
}
.last{
    width: 100%;
    margin-top: 30px;
    height: 5px;
    background: rgb(238, 238, 238);
}
.ee img{
    margin-top: 10px;
}
</style>
