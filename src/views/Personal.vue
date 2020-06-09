<template>
  <div>
    <div class="one">
      <input   class="input"  placeholder="查询英文或者中文">
      <img class="img" src="@/assets/images/drawable-xhdpi/ld.png" width="20px" height="20px">
    </div>
    <TabBar />
  </div>
</template>

<script>
import TabBar from '../components/tabBar/TabBar'
export default {
  name: 'Class',
  data() {
    return {}
  },
  components: {
    TabBar
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
.one{
  height: 50px;
  background:#fff;
}
.input{
 
  background: rgb(242, 242,242);
  
  width: 330px;
  height: 30px;
}
.img{
  
  margin-left: 375px;}
</style>
