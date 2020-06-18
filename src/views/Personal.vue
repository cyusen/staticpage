<template>
  <div>
    <div class="one">
      <input   class="input"  placeholder="查询英文或者中文">
      <img class="img" src="@/assets/images/drawable-xhdpi/ld.png" width="20px" height="20px" @click="goNotice" >
    </div>
  <div class="all">
    <div class="two" >
      <div class="head">
        <img src="@/assets/images/drawable-xhdpi/tx.jpg" alt="">
      </div>
      <div class="head1">
      <div class="name">陈雨森</div>
      <div class="id">扇贝id：12344321</div>
      <div class="xian"></div>
      <div class="card">打卡0天</div>
      <div class="l">|</div>
      <div class="hui">徽章0个</div>
      </div>
    </div>
    <div class="three">
      <div @click="goDcs">
        <img src="@/assets/images/drawable-xhdpi/dcs.png" alt="" width="30px" height="30px">
        <p>单词书</p>
      </div>
      <div @click="goCk">
        <img src="@/assets/images/drawable-xhdpi/wdck.png" alt="" width="30px" height="30px">
        <p>我的词库</p>
      </div>
      <div @click="goJd">
        <img src="@/assets/images/drawable-xhdpi/dcjd.png" alt="" width="30px" height="30px">
        <p>单词进度</p>
      </div>
      <div @click="goKzb">
        <img src="@/assets/images/drawable-xhdpi/kzb.png" alt="" width="30px" height="30px">
        <p>扩展包</p>
      </div>
    </div>
    <div class="four">
      <ul class="fourth">
        <li  @click="goClass">课程<span>&rsaquo;</span></li>
        <li @click="goConch">贝壳<span>&rsaquo;</span><span class="shu">0个</span></li>
        <li>兑换<span>&rsaquo;</span></li>
        <li>活动<span>&rsaquo;</span></li>
      </ul>
    </div>
    <div class="five">
      <ul class="fifth">
      <li>短信<span>&rsaquo;</span></li>
      </ul>
    </div>
    <div class="last">
      <ul class="end">
      <li>帮助与反馈<span>&rsaquo;</span></li>
      <li>设置<span>&rsaquo;</span></li>
      </ul>
    </div>
  </div>
    <TabBar />
  </div>
</template>

<script>
import TabBar from '../components/tabBar/TabBar'
export default {
  name: 'Personal',
  data() {
    return {}
  },
  components: {
    TabBar
  },
  created() {},
  mounted() {},
  methods: {
    goNotice(){
      this.$router.push('/notice')
    },
    goConch(){
      this.$router.push('/conch')
    },
    goDcs(){
      this.$router.push('/word')
    },
    goCk(){
      this.$router.push('/myword')
    },
    goClass(){
      this.$router.push('/myclass')
    },
    goKzb(){
      this.$router.push('/bag')
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
  height: 80px;
  background:#fff;
  border-bottom: 1px solid #999;
}
.input{
  padding-left: 30px;
  position:absolute;
  margin-top: 30px;
  background: rgb(242, 242,242);
  margin-left: 20px;
  width: 310px;
  height: 30px;
}
.img{
  margin-top: 33px;
  margin-left: 340px;}
.all{
  background: rgb(236, 233, 233);
}
.two{
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 80px;
  height: 180px;
  background: white;
}

.head img{
  width: 70px;
  height: 70px;
  background:#000;
  border-radius: 70px;
  margin-top: 10px;
}
.name{
  margin-top: -75px;
  padding-left: 80px;
  font-size: 20px}
.id{
  padding-left: 80px;
  font-size: 13px;
  color: #999;
  
}
.xian{
  margin-left: 80px;
  border-bottom: 1px solid #999;}
.card{
  margin-top: 10px;
  padding-left: 80px;
}
.l{
  margin-top: -20px;
  padding-left: 145px;
}
.hui{
  margin-top: -19px;
  padding-left: 160px;}
.three{
  margin-top: 10px;
  height: 80px;
  background: white;

}
.three div{
  text-align: center;
  padding-top: 15px;
  width: 25%;
  float: left;
}
.three div p{
  color: gray;
}
.four{
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 10px;
  background: #fff;
  height: 230px;
}
.fourth li{
  padding-top: 30px;
}
.fourth li span{
  float: right;
}
.shu{
  padding-right: 10px; 
}
.five{
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 10px;
  height: 80px;
  background: white;
}
.fifth li{
  padding-top: 30px;
}
.fifth li span{
  float: right;
}
.last{
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 10px;
  height: 180px;
  background: white;
}
.end li{
  padding-top: 30px;
}
.end li span{
  float: right;
}
</style>
