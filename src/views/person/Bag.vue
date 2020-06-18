<template>
  <div>
    <div class="head"> 
        <img class="img1" src="@/assets/images/drawable-xhdpi/jt.png" alt="" width="25px" height="25px" @click="goPersonal">
        <p class="p1">扩展包</p>
    </div>
    <div class="body">
        <ul>
            <img class="img2" src="@/assets/images/drawable-xhdpi/bag1.png" alt="" width="80px" >
            <span>科林斯词典</span>
            <p>权威的英文词典，用英文学习英文。</p>
        </ul>
    </div >
    <div class="body">
        <ul>
            <img class="img2" src="@/assets/images/drawable-xhdpi/bag2.png" alt="" width="80px" >
            <span>智慧词根</span>
            <p>词根体现单词的本质含义，学习单词更轻松</p>
        </ul>
    </div >
    <div class="body">
        <ul>
            <img class="img2" src="@/assets/images/drawable-xhdpi/bag3.png" alt="" width="80px" >
            <span>派生联想</span>
            <p>通过词法和语法联想，把单词串成树</p>
        </ul>
    </div >
    <div class="bottom">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Bag',
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
    width: 100%;
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
.body{
  padding-top: 55px;
    height: 100px;
    background: rgb(255, 255, 255);
    border-bottom: 1px solid #999}
.img2{
  margin-top: -45px;
    margin-left: 17px;
}
 span{
   position: absolute;
  margin-top: -30px;
  padding-left: 3px;
  font-weight: bold;
  font-size: 15px;
}
p{
  position: absolute;
  margin-left: 100px;
  margin-top: -40px;
  font-size: 13px
}

</style>
