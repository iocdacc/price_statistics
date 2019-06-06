<template>
  <div>
    <div class="title">
      <h1>手机价格分布图</h1>
    </div>
    <div class="box-main">
      <Table 
        stripe
        height="800"
        :columns="columns" 
        :data="data"
      ></Table>
      <Spin size="large" fix v-if="spinShow"></Spin>
    </div>
  </div>
</template>
<script>
import cardel from "../components/card.vue"

export default {
  components: {
    cardel
  },
  methods: {
  },
  mounted:function (){

    this.columns.forEach((v,index) => {
      if (index > 0) {
        this.$set(v, 'render', (h, params) => {
          return h(cardel,{props:{
            phone: params.row[v.key]
          }})
        })
      }
    })

    this.phone.forEach(v => {
      let lineNum = (this.lineTitle.length - Math.floor(+v.pic / 500)) - 1
      if (this.lineTitle[lineNum][v.type]) {
        this.lineTitle[lineNum][v.type].push(v)
      }else{
        this.lineTitle[lineNum][v.type] = [v]
      }
    })
    this.data = this.lineTitle
    this.spinShow = false
  },
  data: () => {
    return ({
      spinShow: true,
      lineTitle:[
        {'0': '10000\u21E1'},
        {'0': '9500 - 10000'},
        {'0': '9000 - 9500'},
        {'0': '8500 - 9000'},
        {'0': '8000 - 8500'},
        {'0': '7500 - 8000'},
        {'0': '7000 - 7500'},
        {'0': '6500 - 7000'},
        {'0': '6000 - 6500'},
        {'0': '5500 - 6000'},
        {'0': '5000 - 5500'},
        {'0': '4500 - 5000'},
        {'0': '4000 - 4500'},
        {'0': '3500 - 4000'},
        {'0': '3000 - 3500'},
        {'0': '2500 - 3000'},
        {'0': '2000 - 2500'},
        {'0': '1500 - 2000'},
        {'0': '1000 - 1500'},
        {'0': '500 - 1000'},
        {'0': '0 - 500'}
      ],
      data:[],
      columns:[
        {title: '价格区间',key:'0',align: 'right', width: '110', fixed: "left"},
        {title: '华为', key:'1',align: 'center', width: '162'},
        {title: '苹果', key:'2',align: 'center', width: '162'},
        {title: '小米',key:'3',align: 'center', width: '162'},
        {title: 'OPPO',key:'4',align: 'center', width: '162'},
        {title: '一加',key:'5',align: 'center', width: '162'},
        {title: 'VIVO',key:'6',align: 'center', width: '162'},
        {title: '三星',key:'7',align: 'center', width: '162'},
        {title: '魅族',key:'8',align: 'center', width: '162'},
        {title: '诺基亚',key:'9',align: 'center', width: '162'},
        {title: 'realme',key:'10',align: 'center', width: '162'},
        {title: '联想',key:'11',align: 'center', width: '162'},
        {title: '美图',key:'12',align: 'center', width: '162'},
        {title: '努比亚',key:'13',align: 'center', width: '162'},
        {title: '飞利浦',key:'14',align: 'center', width: '162'},
        {title: '锤子',key:'15',align: 'center', width: '162'},
        {title: '黑鲨',key:'16',align: 'center', width: '162'},
        {title: '中兴',key:'17',align: 'center', width: '162'},
        {title: '360',key:'18',align: 'center', width: '162'},
      ],
      phone:[
        {type: '1',pic: '433',img: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/58427/21/673/318760/5cee26f3E8f0a6faa/78623b254a2b7121.jpg'},
        {type: '1',pic: '2533',img: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/58427/21/673/318760/5cee26f3E8f0a6faa/78623b254a2b7121.jpg'},
        {type: '1',pic: '1211',img: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/58427/21/673/318760/5cee26f3E8f0a6faa/78623b254a2b7121.jpg'},
        {type: '1',pic: '8899',img: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/58427/21/673/318760/5cee26f3E8f0a6faa/78623b254a2b7121.jpg'},
        {type: '1',pic: '8666',img: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/58427/21/673/318760/5cee26f3E8f0a6faa/78623b254a2b7121.jpg'},
        {type: '1',pic: '8777',img: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/58427/21/673/318760/5cee26f3E8f0a6faa/78623b254a2b7121.jpg'},
      ],
    })
  }
}
</script>
<style lang="less" scoped>
/deep/ .ivu-table-column-center{
  padding: 6px 0;
}

.box-main {
  position: relative;
  height: 800px;
  width: 1625px;
  margin: 0 auto 50px auto;
  background: #fff;
  -webkit-box-shadow: 0px 0px 5px rgba(26,26,26,.1);
  box-shadow: 0px 0px 5px rgba(26,26,26,.1);
  border-radius: 5px;
}
.title {
  width: 1625px;
  margin: 0 auto;
  line-height: 50px;
  height: 50px;
  text-align: center;
}
</style>
