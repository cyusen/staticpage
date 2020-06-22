<template>
  <div>
    <div class="one">
      <img class="img0" src="@/assets/images/drawable-xhdpi/jt.png" width="20px" @click="goPersonal">
      <p>自评模式</p>
      <img class="img1" src="@/assets/images/drawable-xhdpi/ss.png" width="25px">
      <img class="img2" src="@/assets/images/drawable-xhdpi/ljt.png" width="25px">
    </div>
    <div class="two">
        <div class="span">1</div>
        <span class="span1">99</span>
    </div>
    <div>
        <ul class="ul11">
          <img class="img3" src="@/assets/images/drawable-xhdpi/bf.png" alt="" width="30px">
          <li class="li1">butterfiy</li>
          <li class="li2">/'b^terflaI/</li>
        </ul>
    </div>
    <div>
        <img class="imgbutton" src="@/assets/images/drawable-xhdpi/ljt.png" width="25px">
        <button class="b1">太简单</button>
        <button class="b2">认识</button>
        <button class="b3"> 不认识</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Self',
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
  border-bottom: 1px solid #999;
}
.img0{
  position: absolute;
  margin-left: 10px;
  margin-top: 30px;
}
.img1{
  position: absolute;
  margin-left: 300px;
  margin-top: 25px;
}
.img2{
  position: absolute;
  margin-left: 330px;
  margin-top: 25px;
}
p{
  font-size: 20px;
  position: absolute;
  margin-left: 50px;
  margin-top: 26px;
}
.two{
    background: rgb(238,238,238);
    margin-top: 60px;
}
.two div{
    color: #fff;
    width: 30px;
    position: absolute;
    background: rgb(44,164,139);
    padding-left: 15px;
    margin-left: -10px;
    border-radius: 30px;
}
.span1{
    color: #999;
    margin-left: 350px;
    background: rgb(238,238,238);
}
.ul11 .img3{
  
  margin-left: 315px;
  margin-top: 30px;
}
.ul11{
  width: 375px;
  height: 70px;
}
.ul11 .li1{
  font-weight: bold;
  font-size: 25px;
  margin-top:-45px;
  margin-left: 25px;
}
.li2{
    color: #999;
    margin-left: 25px;
    
}
.imgbutton{
    position: absolute;
    margin-top: 305px;
    margin-left: 150px;
}
.b1{
    background: #fff;
    width: 100px;
    height: 35px;
    border: 1px solid rgb(238,238,238);
    border-radius: 50px;
    margin-left: 145px;
    margin-top: 300px;}
.b2{
    margin-left: -204px;
    height: 50px;
    width: 300px;
    position: absolute;
    margin-top: 370px;
    background: #fff;
    border: 1px solid rgb(238,238,238);
    border-radius: 5px;
}
.b3{
    margin-left: -204px;
    height: 50px;
    width: 300px;
    border-radius: 5px;
    position: absolute;
    margin-top: 430px;
    border: 1px solid rgb(238,238,238);
    background: #fff;
}
</style>
