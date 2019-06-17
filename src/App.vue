<template>
  <div>
    <div class="head">
      <div class="title">
        <h1>手机价格分布图</h1>
      </div>
    </div>
    <router-view />
    <div class="foot">
      <div class="statement">
        <ul>
          <li><a href="//blog.pzroot.com" target="_blank">Blog</a><span>|</span></li>
          <li><a href="//github.com/iocdacc" target="_blank">Github</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{
  },
  methods: {

  },
  data: () => {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.head {
  width: 1625px;
  margin: 0 auto;
  margin-bottom: 10px;
  .title {
    display: table;
    margin: 0 auto;
    line-height: 50px;
    height: 50px;
    text-align: center;
  }
}

.foot {
  width: 1625px;
  height: 55px;
  margin: 0 auto;
  position: relative;
  .statement {
    position: absolute;
    right: 0;
    bottom: 0;

    li{
      float: left;
      a {
        color: #2bbc8a;
      }
      a:hover{text-decoration:underline;}
      span {
        margin: 0 10px;
        color: #2bbc8a;
      }
    }
  }
}
</style>