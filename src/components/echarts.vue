<template>
  <div class="echarts">
    <div class="title">
        <div class="market">营销中心</div>
      <div class="more"><a href="#">更多<span class="wbi-arrowright wbi-s wbi-gray2"></span></a></div>
    </div>
    <div id="myChart" :style="{width: '334px',height: '180px'}"></div>
    <div class="center">
      <div class="grade">
        综合得分:<span>{{ grade }}</span>
      </div>
      <div class="layer1">
        为了避免被其他商家赶超，快做出些营销动作来巩固
        自己的实力！<a href="#">现在就去</a>
      </div>
      <div class="layer2">
        你已经被其他商家甩下啦，这里有快速提升你店铺营销
        能力的办法！<a href="#">点击查看</a>
      </div>
      <div class="seven_data">
        近七日总和环比上个七日数据
      </div>
      <div class="content">
        <div class="flow">
          <div class="flow_top">
            <div class="word">流量</div>
            <div class="icon">
              <el-tooltip content="近7天到店访客数" placement="bottom" effect="light">
                <span class="wbi-yiwen wbi-s wbi-gray"></span>
              </el-tooltip>
            </div>
          </div>
          <div class="per">
            {{ flow_per }}%
          </div>
        </div>
        <div class="translate">
          <div class="translate_top">
            <div class="word">转化</div>
            <div class="icon">
              <el-tooltip content="近7天全店下单人数+流量" placement="bottom" effect="light">
                <span class="wbi-yiwen wbi-s wbi-gray"></span>
              </el-tooltip>
            </div>
          </div>
          <div class="per">
            {{ translate_per }}%
          </div>
        </div>
        <div class="interact">
          <div class="interact_top">
            <div class="word">互动</div>
            <div class="icon">
              <el-tooltip content="近7天进店两次或以上的访客数" placement="bottom" effect="light">
                <span class="wbi-yiwen wbi-s wbi-gray"></span>
              </el-tooltip>
            </div>
          </div>
          <div class="per">
              {{ interact_per }}%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'echarts',
    data:function(){
      return {
        grade: "D",
        flow_per: "0.0",
        translate_per: "0.0",
        interact_per: "0.0"
      }
    },
    mounted() {
      this.chart();
    },
    methods: {
      chart() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'));
        // 绘制图表
        myChart.setOption({
          // title:
          //   [{
          //   text: '营销中心',
          //   left: "left",
          //   textStyle: {
          //     color: "#464c5b",
          //     fontSize: "14px"
          //   }
          // },{
          //   text: '更多 >',
          //   left: "right",
          //   textStyle: {
          //     color: "#9ca7b6",
          //     fontSize: "14px"
          //   }
          // }],
          radar: {
            indicator: [
              {name: "流量(A)",max:200},
              {name: "转化(B)",max:200},
              {name: "互动(C)",max:200}
            ],
            radius: 60,
            shape: 'circle',
            splitNumber: 6,
            name: {
              textStyle: {
                color: '#464c5b'
              }
            },
            splitArea: {
              show: false
            }
          },
          tooltip: {
          },
          series: [{
            type: 'radar',
            symbol: 'circle',
            data: [{
              value: [200,200,200],
              itemStyle: {
                normal: {
                  color: 'rgba(189, 204, 217, 0.1)'
                }
              },
              areaStyle: {
                normal: {
                  color: 'rgba(189, 204, 217, 0.4)'
                }
              }
            },{
              value: [100,150,180],
              itemStyle: {
                normal: {
                  color: "#af83ff"
                }
              }
            }]
          }]
        });
      }
    }
  }
</script>
<style scope>
  .echarts {
    width: 334px;
    height: 420px;
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.25);
  }
    .title {
      padding-top: 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
      .market{
        width: 56px;
        height: 20px;
        margin:0 0 0 19px;
        font-family: PingFangSC;
        font-size: 14px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #464c5b;
      }
      .more {
        width: 45px;
        height: 20px;
        margin-right: 20px;
        cursor: pointer;
        font-family: PingFangSC;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #9ca7b6;
      }
       .more a {
          text-decoration: none;
          color: #9ca7b6;
        }
          span{
            height:20px;
            vertical-align:middle;
          }

    #myChart{
      margin-top:20px;
    }
    .center {
    }
      .grade {
        width: 84px;
        height: 25px;
        margin: 0 0 8px 10px;
        font-family: PingFangSC;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #464c5b;
      }
        span{
          font-family: DIN;
          font-size: 20px;
          font-weight: bold;
          color: #af83ff;
        }

      .layer1 {
        width: 288px;
        height: 34px;
        margin: 0 0 27px 18px;
        font-family: PingFangSC;
        font-size: 12px;
        text-align: left;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #9ca7b6;
      }
       .layer1 a{
          text-decoration: underline;
          color: #464c5b;
        }

      .layer2 {
        width: 288px;
        height: 34px;
        display: none;
        margin: 0 0 27px 18px;
        font-family: PingFangSC;
        font-size: 12px;
        text-align: left;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #9ca7b6;
      }
       .layer2 a{
          text-decoration: underline;
          color: #464c5b;
        }

      .seven_data{
        width: 156px;
        height: 12px;
        margin: 0 0 10px 19px;
        font-family: PingFangSC;
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #454c5c;
      }
      .content {
        display: flex;
        flex-direction: row;
      }
        .flow,.translate,.interact {
          width: 90px;
          height: 52px;
          border-radius: 2px;
          background-color: #f5f7f8;
        }
          .flow_top , .translate_top, .interact_top {
            margin: 10px 0 5px 10px;
          }
            .word {
              width: 24px;
              height: 12px;
              float: left;
              font-family: PingFangSC;
              font-size: 12px;
              font-weight: normal;
              font-style: normal;
              font-stretch: normal;
              line-height: 1;
              letter-spacing: normal;
              color: #657180;
            }
            .icon {
              cursor: pointer;
              width: 50px;
            }

          .per{
            width: 31px;
            height: 14px;
            margin-left:10px;
            font-family: DIN;
            font-size: 14px;
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            line-height: 1;
            letter-spacing: normal;
            color: #454c5c
          }

        .flow{
          margin-left:19px;
        }
        .translate,.interact{
          margin-left:12px;
        }
</style>
