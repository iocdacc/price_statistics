<template>
  <div>
    <div class="head">
      <div class="title">
        <h1>手机价格分布图</h1>
      </div>
      <div class="update_time">
        更新时间：<span>2019年6月16日</span>
      </div>
    </div>
    <router-view />
    <div class="foot">
      <div class="statement">
        <span>Made in 2019 By iocdacc</span>
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
  position: relative;
  .title {
    display: table;
    margin: 0 auto;
    line-height: 50px;
    height: 50px;
    text-align: center;
  }
  .update_time {
    position: absolute;
    right: 0;
    bottom: 0;
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

    span {
      margin-right: 20px;
      color: #2bbc8a;
    }

    ul,span {
      display: inline-block;
      vertical-align: bottom;
    }

    li{
      display:inline-block;
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