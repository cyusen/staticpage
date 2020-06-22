<template>
  <div>
   <div class="one">
      <img class="img0" src="@/assets/images/drawable-xhdpi/cha.png" width="60px" @click="goPersonal">
      <p>Python 课程</p>
      <img class="img1" src="@/assets/images/drawable-xhdpi/share.png" width="40px" >
    </div>
    <div class="one1"> 
         <img  src="@/assets/images/drawable-xhdpi/python.jpg" width="375px" >
    </div>
    <div  class="div">
    <img class="img3" src="@/assets/images/drawable-xhdpi/ljgm.png" alt="" width="180px">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Python',
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
          this.$router.push('/class')
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
    margin-top: 1px;
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
.img3{
    position: absolute;
    margin-top: -55px;
   margin-left: 195px;
}
.div{
      animation-name:  myheart;
      animation-duration: 1.7s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
			}
.div .img3{
	width: 180px;
	height: 50px;
	}
@keyframes myheart{
	from{
		transform: scale(1);
		}
	to{
		transform: scale(1.1,1.1);
		}
	}
</style>
