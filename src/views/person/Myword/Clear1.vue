<template>
  <div>
    <div class="head"> 
        <img src="@/assets/images/drawable-xhdpi/jt.png" alt="" width="25px" height="25px" @click="goPersonal">
        <p>清空词库</p>
    </div>
  <div>
    <div class="all">
      <div>
      <img src="@/assets/images/drawable-xhdpi/ck3.png" alt="" width="100px">
      <ul>
        <li><input type="checkbox">1.<span> 清空词库后，除单词笔记和自定义单词释义以外，其他数据都会被抹除</span></li>
        <li><input type="checkbox">2.<span>你需要为此支付2000贝壳</span></li>
        <li><input type="checkbox">3.<span>付款确认后，操作立即执行，不支持撤销</span></li>
        <li><input type="checkbox">4.<span>本操作不支持退款</span></li>
      </ul>
      <button>确认清空</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Clear1',
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
.all{
  height: 612px;
  background:rgb(238,238,238);
}
.all img{
  margin-left: 145px;
  margin-top: 30px;
}
ul li{
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 10px;
}
button{
  margin-top: 20px;
  margin-left: 80px;
  width: 180px;
  height: 40px;
  background: #fff;
}
</style>
