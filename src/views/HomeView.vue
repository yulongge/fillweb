<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const toProductPage = () => {
  console.log('to product')
  router.push('/product')
}
</script>

<template>
  <div class="main-container">
    <div class="banner">
      <div class="banner-desc">
        <p class="desc-title">网站大标题</p>
        <p class="desc-desc">网站描述</p>
      </div>
    </div>
    <div class="main-content">
      <div class="main-item recomand-module">
        <div class="pro-info">
          <h1 class="recomand-title">利用腐蚀和侵蚀监控发挥工厂更大产能</h1>
          <p class="recomand-desc">
            腐蚀和侵蚀可以说是石油和天然气及加工行业的两大挑战，它们会导致意外停车，影响运行性能。运营商必须监控腐蚀和侵蚀风险及资产工作情况受到的影响。艾默生的
            PlantWeb
            生态系统提供独特而丰富的腐蚀和侵蚀测量产品组合，能够把优质的数据直接传送到桌面。艾默生帮助客户全面了解腐蚀和侵蚀风险，及时找到工厂解决这些风险的方法。运营商可以运用此数据作出更有根据的决策——从而更大程度优化工厂性能、安全性和盈利能力。
          </p>

          <div class="module-option">
            <div class="option-btn">查看产品</div>
            <div class="option-btn">咨询</div>
          </div>
        </div>
        <div class="pro-list">
          <div class="pro-list-item">
            <div class="pro-desc">
              <p>让运营商监测腐蚀和侵蚀的完整数字解决方案</p>
              <p class="get-info">获取</p>
            </div>
            <img
              class="pro-img"
              src="https://www.emerson.cn/resource/image/7090326/portrait_ratio3x4/320/427/23380667693e82e622f9fedfb760e595/401527759D0AA62C80557ACB4407E8F9/ind-corrosion_erosion_monitoring-wellhead_and_management.jpg"
            />
          </div>
          <div class="pro-list-item">
            <div class="pro-desc">
              <p>让运营商监测腐蚀和侵蚀的完整数字解决方案</p>
              <p class="get-info">获取</p>
            </div>
            <img
              class="pro-img"
              src="https://www.emerson.cn/resource/image/7090326/portrait_ratio3x4/320/427/23380667693e82e622f9fedfb760e595/401527759D0AA62C80557ACB4407E8F9/ind-corrosion_erosion_monitoring-wellhead_and_management.jpg"
            />
          </div>
        </div>
      </div>
      <div class="main-item">
        <div class="module-top">
          <h2 class="module-title">公司技术平台</h2>
          <a class="more" @click="toProductPage">更多</a>
        </div>
        <div class="module-list">
          <div class="list-item">
            <img
              class="item-img"
              src="https://www.emerson.cn/resource/image/5996052/landscape_ratio16x9/414/233/ed2c56702626ffce5d3473f9b97494fe/8A129A2805F105CE784CB5D51D5C1E10/permasense-vn001.jpg"
            />
            <div class="item-mask">腐蚀检测系统</div>
          </div>
          <div class="list-item">
            <img
              class="item-img"
              src="https://www.emerson.cn/resource/image/5996052/landscape_ratio16x9/414/233/ed2c56702626ffce5d3473f9b97494fe/8A129A2805F105CE784CB5D51D5C1E10/permasense-vn001.jpg"
            />
            <div class="item-mask">腐蚀检测系统</div>
          </div>
          <div class="list-item">
            <img
              class="item-img"
              src="https://www.emerson.cn/resource/image/5996052/landscape_ratio16x9/414/233/ed2c56702626ffce5d3473f9b97494fe/8A129A2805F105CE784CB5D51D5C1E10/permasense-vn001.jpg"
            />
            <div class="item-mask">腐蚀检测系统</div>
          </div>
          <div class="list-item">
            <img
              class="item-img"
              src="https://www.emerson.cn/resource/image/5996052/landscape_ratio16x9/414/233/ed2c56702626ffce5d3473f9b97494fe/8A129A2805F105CE784CB5D51D5C1E10/permasense-vn001.jpg"
            />
            <div class="item-mask">腐蚀检测系统</div>
          </div>
        </div>
      </div>
      <div class="main-item resource-module">
        <div class="module-top">
          <h2 class="module-title">技术资源</h2>
        </div>
        <div class="module-list">
          <div class="list-item">
            <div class="item-mask">
              <p>腐蚀文档</p>
              <a
                href="https://www.emerson.com/documents/automation/article-putting-it-online-en-6469504.pdf?_gl=1*7fy53d*_ga*MjA4NzEzMTM3Mi4xNzI3NTMyNTM0*_ga_1MGRRDNV9H*MTcyODk5NDU1My4xNC4xLjE3Mjg5OTQ1NTguMC4wLjA."
                >查看</a
              >
            </div>
          </div>
          <div class="list-item">
            <div class="item-mask">
              <p>腐蚀文档</p>
              <a
                href="https://www.emerson.com/documents/automation/article-putting-it-online-en-6469504.pdf?_gl=1*7fy53d*_ga*MjA4NzEzMTM3Mi4xNzI3NTMyNTM0*_ga_1MGRRDNV9H*MTcyODk5NDU1My4xNC4xLjE3Mjg5OTQ1NTguMC4wLjA."
                >查看</a
              >
            </div>
          </div>
          <div class="list-item">
            <div class="item-mask">
              <p>腐蚀文档</p>
              <a
                href="https://www.emerson.com/documents/automation/article-putting-it-online-en-6469504.pdf?_gl=1*7fy53d*_ga*MjA4NzEzMTM3Mi4xNzI3NTMyNTM0*_ga_1MGRRDNV9H*MTcyODk5NDU1My4xNC4xLjE3Mjg5OTQ1NTguMC4wLjA."
                >查看</a
              >
            </div>
          </div>
          <div class="list-item">
            <div class="item-mask">
              <p>腐蚀文档</p>
              <a
                href="https://www.emerson.com/documents/automation/article-putting-it-online-en-6469504.pdf?_gl=1*7fy53d*_ga*MjA4NzEzMTM3Mi4xNzI3NTMyNTM0*_ga_1MGRRDNV9H*MTcyODk5NDU1My4xNC4xLjE3Mjg5OTQ1NTguMC4wLjA."
                >查看</a
              >
            </div>
          </div>
        </div>
        <a class="more">更多</a>
      </div>
      <div class="main-item product-module">
        <div class="module-top">
          <h2 class="module-title">公司产品</h2>
          <a>更多</a>
        </div>
        <div class="module-list">
          <div class="list-item">
            <img
              class="prod-img"
              src="https://www.emerson.cn/resource/image/7738722/portrait_ratio1x1/207/207/23a0df3f3f241668dad94f7105e04905/D1BFA21F4A540BDAA6505D181241B4D5/rmt-4390-front.png"
            />
            <div class="prod-desc">探测仪探测仪探测仪探测仪探测仪探测仪探测仪探测仪</div>
          </div>
          <div class="list-item">
            <img
              class="prod-img"
              src="https://www.emerson.cn/resource/image/7738722/portrait_ratio1x1/207/207/23a0df3f3f241668dad94f7105e04905/D1BFA21F4A540BDAA6505D181241B4D5/rmt-4390-front.png"
            />
            <div class="prod-desc">探测仪探测仪探测仪探测仪探测仪探测仪探测仪探测仪</div>
          </div>
          <div class="list-item">
            <img
              class="prod-img"
              src="https://www.emerson.cn/resource/image/7738722/portrait_ratio1x1/207/207/23a0df3f3f241668dad94f7105e04905/D1BFA21F4A540BDAA6505D181241B4D5/rmt-4390-front.png"
            />
            <div class="prod-desc">探测仪探测仪探测仪探测仪探测仪探测仪探测仪探测仪</div>
          </div>
          <div class="list-item">
            <img
              class="prod-img"
              src="https://www.emerson.cn/resource/image/7738722/portrait_ratio1x1/207/207/23a0df3f3f241668dad94f7105e04905/D1BFA21F4A540BDAA6505D181241B4D5/rmt-4390-front.png"
            />
            <div class="prod-desc">探测仪探测仪探测仪探测仪探测仪探测仪探测仪探测仪</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.main-container {
  flex: 1;
  overflow: auto;
  // padding: 0px;
  .banner {
    width: 100%;
    height: 296px;
    background-image: url(https://www.emerson.cn/resource/image/4915606/landscape_ratio4x1/1400/350/312db4c941756d20da5c31ce1f326f4d/2117C89D29F295BE13352C91E45BFAE4/hero-img-corrosion_erosion_monitoring.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .banner-desc {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background-color: rgba($color: #000000, $alpha: 0.4);
      padding: 0px 200px;
      color: #fff;
      .desc-title {
        font-size: 30px;
        font-weight: bold;
        margin-top: 80px;
      }
      .desc-desc {
        font-size: 16px;
        font-weight: 400;
        margin-top: 40px;
      }
    }
  }
  .more {
    cursor: pointer;
  }
  .main-content {
    .main-item {
      border-bottom: 1px solid #efefef;
      min-height: 300px;
      padding: 20px 300px;
      .module-top {
        display: flex;
        align-items: center;
        .module-title {
          flex: 1;
        }
      }
      .module-list {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .list-item {
          width: 380px;
          height: 214px;
          position: relative;
          cursor: pointer;
          margin-bottom: 10px;
          .item-img {
            width: 100%;
            height: 100%;
          }
          .item-mask {
            position: absolute;
            top: 0px;
            left: 0px;
            bottom: 0px;
            right: 0px;
            background-color: rgba($color: #000000, $alpha: 0.5);
            color: #fff;
            font-size: 18px;
            font-weight: 500px;
            line-height: 214px;
            text-align: center;
          }
        }
      }
    }
    .recomand-module {
      display: flex;
      .pro-info {
        flex: 1;
        .recomand-title {
        }
        .recomand-desc {
          margin-top: 20px;
        }
      }
      .pro-list {
        width: 400px;
        margin-left: 20px;
        .pro-list-item {
          display: flex;
          width: 380px;
          height: 152px;
          background-color: #004b8d;
          color: #fff;
          margin-bottom: 10px;
          .pro-desc {
            padding: 20px 20px;
            .get-info {
              margin-top: 20px;
            }
          }
        }
      }
      .module-option {
        display: flex;
        margin-top: 60px;
        .option-btn {
          background-color: #00573d;
          color: #fff;
          width: 280px;
          height: 48px;
          margin-right: 20px;
          line-height: 48px;
          text-align: center;
          cursor: pointer;
        }
      }
    }
    .resource-module {
      .module-list {
        flex-wrap: nowrap;
        .list-item {
          flex: 1;
          margin-left: 20px;
          height: 300px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          .item-mask {
            background-color: rgba($color: #efefef, $alpha: 1);
            color: #000;
            display: flex;
            flex-direction: column;
            line-height: unset;
            justify-content: center;
            a {
              margin-top: 30px;
            }
          }
        }
      }
      .more {
        display: block;
        width: 200px;
        height: 40px;
        margin: auto;
        border: 1px solid #b6b4b4;
        text-align: center;
        line-height: 40px;
        margin-top: 20px;
        cursor: pointer;
        padding: 0;
      }
    }
    .product-module {
      .module-list {
        flex-wrap: nowrap;
        .list-item {
          flex: 1;
          margin-left: 20px;
          height: 300px;
          text-align: center;
          // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          .prod-desc {
            text-align: left;
            padding: 0px 20px;
          }
        }
      }
    }
  }
}
</style>
