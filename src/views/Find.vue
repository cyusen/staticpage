<template>
<!-- 引入轮播组件-->
  <div>
    <van-sticky>
      <Carousel />
    </van-sticky>
 
    课程
    <TabBar />
  </div>
</template>

<script>
import Carousel from '../components/Carousel'
import TabBar from '../components/tabBar/TabBar'
export default {
  name: 'Class',
  data() {
    return {}
  },
  components: {
    Carousel,
    TabBar
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
</style>
