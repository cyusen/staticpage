<template>
  <div>
    <div class="head"> 
        <img src="@/assets/images/drawable-xhdpi/jt.png" alt="" width="25px" height="25px" @click="goPersonal">
        <p>我的课程</p>
    </div>
    <div class="body">
    <img src="@/assets/images/drawable-xhdpi/class.png" alt="" width="375px">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Myclass',
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
.head{
    height: 55px;
    padding-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: 1px solid rgb(211, 203, 203);
}
p{
  margin-top: -30px;
  margin-left: 60px;
  font-size: 20px;
  color: rgb(102, 102, 102);
}
.body img{margin-top: 100px;}
</style>
