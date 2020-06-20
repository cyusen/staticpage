<template>
  <div>
    <div class="head"> 
        <img src="@/assets/images/drawable-xhdpi/jt.png" alt="" width="25px" height="25px" @click="goPersonal">
        <p>通知</p>
    </div>
    <div class="all">
        <div class="div1">
            <ul>
                <li>学习设置<span>&rsaquo;</span></li>
                <li>提醒设置<span>&rsaquo;</span></li>
                <li>账号设置<span>&rsaquo;</span></li>
                <li>其他设置<span>&rsaquo;</span></li>
            </ul>
        </div>
        <div class="div2">
           <ul>
               <li>夜间模式
                <input type="checkbox" id="s5" />
                
  <label class="slider-v3" for="s5"></label>
  </li>
           </ul>
        </div>
        <div>

        </div>
        <div class="div3">
            <ul>
                <li>给个好评<span>&rsaquo;</span></li>
                <li>关于扇贝<span>&rsaquo;</span></li>
                <li>检测更新<span>&rsaquo;</span></li>
            </ul>
        </div>
        <div class="div4">
            <ul>
                <li>退出账号<span>&rsaquo;</span></li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Setting',
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
}
p{
  margin-top: -30px;
  margin-left: 60px;
  font-size: 20px;
  color: rgb(102, 102, 102);
}
.all{
    background: rgb(236, 233, 233);
    height: 612px;
}
.div1{
    position: absolute;
    margin-top: 10px;
}
.div3{
    position: absolute;
    margin-top: 15px;
}
ul{
    width: 375px;
    background: #fff;
}
li{
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(214, 214, 214);
}
span{
    margin-left: 280px;
}
.div2{
    position: absolute;
    margin-top:190px;
}
.div3{
    position: absolute;
    margin-top: 245px;
}
.div4{
    position: absolute;
    margin-top: 385px;
}
input {
  position: absolute;
 padding-top: 10px;
  left: -9999px;
}
.slider-v3 {
    margin-top: -20px;
    margin-left: 300px;
  position: relative;
  display: block;
  width: 3em;
  height: 1.5em;
  cursor: pointer;
  border-radius: 0.75em;
  transition: 350ms;
  background: #ddd;
}

.slider-v3::after {
  position: absolute;
  content: '';
  width: 1em;
  height: 1em;
  top: 0.25em;
  left: 0.25em;
  border-radius: 0.75em;
  transition: width 200ms ease-out, height 300ms 50ms ease-in, top 300ms 50ms ease-in, left 250ms 50ms ease-in, background 300ms ease-in, box-shadow 300ms ease-in;
  background: #f2f2f2;
  box-shadow: 0 0 0 1.5em #f2f2f2 inset;
}

input:checked + .slider-v3::after {
  width: 1.5em;
  height: 1.5em;
  top: 0;
  left: 1.5em;
  background: #4c6;
  box-shadow: 0 0 0 0 #f2f2f2 inset;
}
</style>
