<template>
  <div>
    <div class="head"> 
        <img class="img1" src="@/assets/images/drawable-xhdpi/jt.png" alt="" width="25px" height="25px" @click="goPersonal">
        <p class="p1">单词书</p>
        <p class="p2">书库</p>
    </div>
    <div class="body">
        <ul>
            <li class="li1"></li>
            <li class="li2">正在学习</li>
            <img class="img2" src="@/assets/images/drawable-xhdpi/word.png" alt="" width="100px" >
        </ul>
        <div class="in">
            <p class="p1">四级考试大纲词表（2016版）</p>
            <p class="p2">上传人：Shanbay</p>
            <p class="p3">6127词</p>
            <p class="p4">预计完成：2021.06.08</p>
        </div>
    </div >
    <div class="bottom">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Word',
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
    position: absolute;
    height: 55px;
    padding-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
    background: #fff;
    border-bottom: 1px solid rgb(226, 218, 218);
}
.head .p1{
  margin-top: -30px;
  margin-left: 60px;
  font-size: 20px;
  color: rgb(102, 102, 102);
  font-weight: bold;
}
.head .p2{
  margin-top: -27px;
  margin-left: 65px;
  font-size: 20px;
  color: rgb(102, 102, 102);
  padding-left: 230px;
}
.body{
    height: 260px;
    background: rgb(255, 255, 255);}
.li1{
    position: absolute;
    background: green;
    width: 17px;
    height: 2px;
    border-radius: 2px;
    transform: rotate(90deg);
    margin-top: 75px;
    margin-left: 10px;
}
.li2{
    position: absolute;
    margin-top: 66px;
    margin-left: 35px;
    font-size: 14px;
    color: #999;
}
.img2{
    position: absolute;
    margin-top: 100px;
    margin-left: 17px;
}
.bottom{
    height: 410px;
    background: rgb(231, 231, 231);
}
.in{
    padding-top: 100px;
    padding-left: 130px;
}
.in .p2{
    padding-top: 10px;
    color: #999;
    font-size:13px;
}
.in .p3{
    color: #999;
    font-size:13px;
}
.in .p4{
    padding-top: 45px;
    font-size: 15px;
}

</style>
