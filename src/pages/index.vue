<template>
  <div class="box-main">
    <Table 
      stripe
      border
      height="800"
      :columns="columns" 
      :data="data"
    ></Table>
    <Spin size="large" fix v-if="spinShow"></Spin>
  </div>
</template>
<script>
import axios from "axios"
import cardel from "../components/card.vue"

export default {
  components: {
    cardel
  },
  methods: {
  },
  mounted:function (){
    axios.get('/config/phone-config.json').then((response) => {
      this.columns = response.data.columns
      this.data = response.data.lineTitle
      this.spinShow = false

      this.columns.forEach((v,index) => {
        if (index > 0) {
          this.$set(v, 'render', (h, params) => {
            return h(cardel,{props:{
              phone: params.row[v.key]
            }})
          })
        }
      })
    }).then(() => {
      axios.get('/api/price_statistics/master/public/mock/phone').then((response) => {
        let lineNum
        response.data.forEach(v => {
          lineNum = (this.data.length - Math.floor(+v.pic / 500)) - 1
          lineNum = lineNum<=0?0:lineNum
          if (this.data[lineNum][v.type]) {
            this.data[lineNum][v.type].push(v)
          }else{
            this.$set(this.data[lineNum], v.type, [v])
          }
        })
      })
    })

  },
  data: () => {
    return ({
      spinShow: true,
      data:[],
      columns:[],
    })
  }
}
</script>
<style lang="less" scoped>
/deep/ .ivu-table-column-center{
  margin: 6px 0px;
}

.box-main {
  position: relative;
  height: 800px;
  width: 1625px;
  margin: 0 auto;
  background: #fff;
  -webkit-box-shadow: 0px 0px 5px rgba(26,26,26,.1);
  box-shadow: 0px 0px 5px rgba(26,26,26,.1);
  border-radius: 5px;
}
</style>
