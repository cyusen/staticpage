<template>
  <div id="tabbar">
    <div class="tab">
      <ul class="tab-bar">
        <li class="tab-bar-item" v-for="(item, index) in nav" :key="index" @click="selectNav(item.title)">
          <span class="tab-bar-item-icon">
            <img :src="isSelect === item.title ? item.url_one : item.url" alt="item.title" :class="[{ home: index === 2 }, { image: index < 2 || index > 2 }]" />
          </span>
          <span class="tab-bar-item-text">
            <p :class="isSelect === item.title ? 'active' : ''">{{ item.title }}</p>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {
      isSelect: '首页',
      nav: [
        { title: '首页', url: require('@/assets/images/drawable-xhdpi/sy.png'), url_one: require('@/assets/images/drawable-xhdpi/sy1.png') },
        { title: '课程', url: require('@/assets/images/drawable-xhdpi/kc.png'), url_one: require('@/assets/images/drawable-xhdpi/kc1.png') },
        { title: '发现', url: require('@/assets/images/drawable-xhdpi/fx.png'), url_one: require('@/assets/images/drawable-xhdpi/fx1.png') },
        { title: '我的', url: require('@/assets/images/drawable-xhdpi/my.png'), url_one: require('@/assets/images/drawable-xhdpi/my1.png') }
      ]
    }
  },
  components: {},
  created() {},
  mounted() {
    this.isSelect = sessionStorage.getItem('isSelect')
  },
  methods: {
    selectNav(title) {
      this.isSelect = title
      switch (title) {
        case '首页':
          this.$router.push('/firstpage')
          break
        case '课程':
          this.$router.push('/class')
          break
        case '发现':
          this.$router.push('/find')
          break
        case '我的':
          this.$router.push('/personal')
          break
      }
      sessionStorage.setItem('isSelect', this.isSelect)
    }
  },
  computed: {
    //   监听路由活跃
    isActive() {
      if (this.sel === this.page) {
        return false
      }
      return true
    }
  }
}

</script>

<style scoped lang="scss">
.tab-bar-item-text{
  color: #999;
}
// tabbBar的css
.tab {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 55px;
  background: #ffffff;
  padding-top: 5px;

  .tab-bar {
    height: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    .tab-bar-item {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      font-size: 0.8em;

    }
  }
}
.router-link-exact-active {
  color: rgb(27, 157, 255);
  font-weight: 600;
}
.active {
  color: rgb(31, 157, 133);
  font-size: 0.9rem;
}
.home {
  width: 20px;
  height: 20px;
}
.image {
  width: 20px;
  height: 20px;
}
</style>
