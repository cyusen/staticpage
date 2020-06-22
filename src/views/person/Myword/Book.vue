<template>
  <div>
      <div class="one">
            <img src="@/assets/images/drawable-xhdpi/cha.png" alt="" width="50px" @click="goFind">
            <p>备考书籍</p>
        </div>
    <div class="two">
        <img src="@/assets/images/drawable-xhdpi/bksj.png" alt="" width="90px">
        <p  class="p1">备考书籍</p>
        <p  class="p2">温故而知新</p>
    </div>
    <div class="three">
        <img src="@/assets/images/drawable-xhdpi/ddd.png" alt="" width="170px">
        <p>扇贝循环单词书|四六级核心词汇|单词书就背这两本</p>
        <p class="p1">￥38</p>
        <p class="p2">￥38</p>
    </div>
    <div class="three">
        <img src="@/assets/images/drawable-xhdpi/ddd.png" alt="" width="170px">
        <p>扇贝循环单词书|四六级核心词汇|单词书就背这两本</p>
        <p class="p1">￥38</p>
        <p class="p2">￥38</p>
    </div>
    <div class="three">
        <img src="@/assets/images/drawable-xhdpi/ddd.png" alt="" width="170px">
        <p>扇贝循环单词书|四六级核心词汇|单词书就背这两本</p>
        <p class="p1">￥38</p>
        <p class="p2">￥38</p>
    </div>
    <div class="three">
        <img src="@/assets/images/drawable-xhdpi/ddd.png" alt="" width="170px">
        <p>扇贝循环单词书|四六级核心词汇|单词书就背这两本</p>
        <p class="p1">￥38</p>
        <p class="p2">￥38</p>
    </div>
    <div class="three">
        <img src="@/assets/images/drawable-xhdpi/ddd.png" alt="" width="170px">
        <p>扇贝循环单词书|四六级核心词汇|单词书就背这两本</p>
        <p class="p1">￥38</p>
        <p class="p2">￥38</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Book',
  data() {
    return {
      active: 0
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
       goFind(){
          this.$router.push('/shop')
      }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.one{
    width: 100%;
    position: fixed;
    height: 50px;
    background: #fff;
    border-bottom: 1px solid rgb(228, 217, 217);
}
.one p{
    margin-left: 60px;
    margin-top: -40px;
    font-weight: bold;
    color: #999;
}
.two{
    height: 150px;
    border-bottom: 1px solid rgb(228, 217, 217);
}
.two img{
    margin-top: 50px;
    margin-left: 90px;
}
.two .p1{
    margin-left: 170px;
    margin-top: -70px;
}
.two .p2{
    margin-left: 175px;
    font-size: 12px;
    color: #999;
    margin-top: 0px;
}
.three{
    float: left;
    margin-top: 10px;
    width: 50%;
    padding-left: 10px;
}
.three p{
    font-size: 13px;
}
.three .p1{
    color: rgb(41, 190, 160);
}
.three .p2{
    text-decoration:line-through;
    margin-left: 30px;
    margin-top: -15px;
    font-size: 12px;
    color: #999;
}

</style>
