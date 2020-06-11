<template>
  <div>
    <!--使用vant吸顶-->
    <div class="lunbo-img">
      <!-- 轮播图 -->
      <div class="viewport">
        <input type="radio" name="slider" id="pic1" checked />
        <input type="radio" name="slider" id="pic2" />
        <input type="radio" name="slider" id="pic3" />
      </div>
      <div class="wrap">
        <img style="height:100px; width:300px" src="https://i.loli.net/2020/05/25/caLQWHX4MArs1fx.png" alt="轮播图1" />
        <img style="height:100px; width:300px" src="https://i.loli.net/2020/05/25/DpRrHlquGKiFLbT.jpg" alt="轮播图2" />
        <img style="height:100px; width:300px" src="https://i.loli.net/2020/05/25/AYeJ46ZMRStwH1D.jpg" alt="轮播图3" />
      </div>
      <div class="page">
        <label for="pic1"></label>
        <label for="pic2"></label>
        <label for="pic3"></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
.viewport {
  overflow: hidden;
  input {
    display: none;
  }
}
.wrap {
  height: 180px;
  position: relative;
  width: 300vw;
  overflow: hidden;
  animation: carousel linear 5s infinite 0s normal;
}
.wrap img {
  display: inline-block;
  width: 100vw;
  height: auto;
  float: left;
}
@keyframes carousel {
  0% {
    left: 0;
  }
  20% {
    left: -0vw;
  }
  40% {
    left: -100vw;
  }
  60% {
    left: -100vw;
  }
  80% {
    left: -200vw;
  }
  100% {
    left: -200vw;
  }
}
.lunbo-img {
  width: 100vw;
  overflow: hidden;
}
</style>
