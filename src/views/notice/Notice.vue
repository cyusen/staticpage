<template>
  <div>
    <div class="head"> 
        <img src="@/assets/images/drawable-xhdpi/jt.png" alt="" width="25px" height="25px" @click="goPersonal">
        <p>通知</p>
    </div>
    <div class="body">
        <ul>
            <li class="li1">暂无未读消息</li>
            <li class="li2">系统消息</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notice',
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
    padding-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
}
p{
  margin-top: -30px;
  margin-left: 60px;
  font-size: 20px;
  color: rgb(102, 102, 102);
}
.body{
    height: 622px;
    background: rgb(238, 238, 238);}
.li1{
    text-align: center;
    height: 150px;
    line-height: 150px;
    color: gray;
    border-bottom: 1px solid rgb(230, 227, 227);
}
.li2{
    padding-left: 10px;
    padding-top: 10px;
    font-size: 15px;
    color: gray;
}
</style>