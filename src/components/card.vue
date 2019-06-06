<template>
  <div>
    <Card
      v-for="(v, index) in phone" 
      :key="index+'phone'"
    >
      <p slot="title">{{v.pic}}</p>
      <div><img :src="v.img" alt=""></div>
    </Card>
  </div>
</template>

<script>
export default {
  props: {
    phone: Array
  },
  data: () => {
    return ({

    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
/deep/ .ivu-card{
  width: 40px;
  height: 50px;
  overflow: hidden;
  float: left;
  margin: 1px;
}
/deep/ .ivu-card-head{
  padding: 0;
  p{
    display: block;
    width: 100%;
    height: 10px;
    line-height: 10px;
    font-size: 10px;
    color: #17233d;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
/deep/ .ivu-card-body{
  padding: 0;
  img{
    display: block;
  }
}
</style>
