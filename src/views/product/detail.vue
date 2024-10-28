<template>
  <div class="product-detail_container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">产品列表 / 探测仪详情</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="product-detail">
      <div class="detail-top">
        <div class="swiper">
          <el-carousel trigger="click" height="400px">
            <el-carousel-item v-for="item in 4" :key="item">
              <p class="small">{{ item }}</p>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="detail-info">
          <p class="info-title">罗斯蒙特™ 无线 Permasense ET310 腐蚀和侵蚀监测系统</p>
          <div class="info-options">
            <span class="option-btn">询价</span>
            <span class="option-btn">了解信息</span>
          </div>
          <div class="info-desc">
            <p class="info-desc-title">产品描述</p>
            <p class="info-desc-content">
              独特的超声波传感器可持续测量管道厚度，让您实时了解腐蚀和侵蚀的变化趋势。ET310
              传感器系统为非侵入式系统，采用电池供电，可快速、直接地完成磁力安装。<i>Wireless</i>HART™
              网络能将可靠、准确的壁厚数据从 ET310
              系统传输到附带软件，帮助您在管道维护和更换方面做出更好的决策。
            </p>
            <p class="info-desc-content">
              独特的超声波传感器可持续测量管道厚度，让您实时了解腐蚀和侵蚀的变化趋势。ET310
              传感器系统为非侵入式系统，采用电池供电，可快速、直接地完成磁力安装。<i>Wireless</i>HART™
              网络能将可靠、准确的壁厚数据从 ET310
              系统传输到附带软件，帮助您在管道维护和更换方面做出更好的决策。
              系统传输到附带软件，帮助您在管道维护和更换方面做出更好的决策。
              系统传输到附带软件，帮助您在管道维护和更换方面做出更好的决策。
            </p>
          </div>
        </div>
      </div>
      <div class="detail-sku">
        <el-tabs v-model="activeName" class="menu-tabs" @tab-click="handleClick">
          <el-tab-pane label="规格" name="1"></el-tab-pane>
          <el-tab-pane label="特点" name="2"></el-tab-pane>
          <el-tab-pane label="文档与图纸" name="3"></el-tab-pane>
          <el-tab-pane label="相关应用" name="4"></el-tab-pane>
          <el-tab-pane label="相关产品" name="5"></el-tab-pane>
        </el-tabs>
        <div class="sku-info">
          <div v-if="activeName == '1'" class="tab-content-item">
            <p class="content-item-sku">
              <span class="item-sku-title">温度范围</span>
              <span class="item-sku-value">用于工况温度高达 160°C (320°F) 的金属Aq</span>
            </p>
            <p class="content-item-sku">
              <span class="item-sku-title">通讯协议</span>
              <span class="item-sku-value">WirelessHART</span>
            </p>
            <p class="content-item-sku">
              <span class="item-sku-title">电池寿命</span>
              <span class="item-sku-value">9 年（BP20E 电池模块）</span>
            </p>
            <p class="content-item-sku">
              <span class="item-sku-title">认证</span>
              <span class="item-sku-value"
                >1 类 1 分类 0 区危险场所，请参阅完整的规格，获得认证的完整列表</span
              >
            </p>
            <p class="content-item-sku">
              <span class="item-sku-title">测量范围</span>
              <span class="item-sku-value">最小壁厚：4mm (0.16")</span>
            </p>
            <p class="content-item-sku">
              <span class="item-sku-title">性能</span>
              <span class="item-sku-value"
                >金属损失检测能力：在现场条件下大于 10micron (0.5 mil)</span
              >
            </p>
            <p class="content-item-sku">
              <span class="item-sku-title">测量频率</span>
              <span class="item-sku-value">默认 - 每 12 小时一次；用户可每小时配置一次</span>
            </p>
          </div>
          <div v-if="activeName == '2'" class="tab-content-item">
            <ul>
              <li class="content-item-sku">用于工况温度高达 160°C (320°F) 的金属</li>
              <li class="content-item-sku">
                壁厚传感器采用 EMAT
                技术，透过外部保护涂层进行测量，从而在上游和下游应用中实现连续运行
              </li>
              <li class="content-item-sku">
                准确识别腐蚀和侵蚀趋势，避免低效和潜在不安全的手动检测方法
              </li>
              <li class="content-item-sku">
                简明、直观的非侵入式安装助力您快速实现自动化，且无需布线成本
              </li>
              <li class="content-item-sku">WirelessHART 技术安全且经济高效，数据可靠性 >99%</li>
              <li class="content-item-sku">适用于船舶环境</li>
              <li class="content-item-sku">无需刮除外部保护漆或涂层</li>
            </ul>
          </div>
          <div v-if="activeName == '3'" class="tab-content-item">
            <div class="content-item-documents">
              <div class="content-item-document">
                <p class="document-title">安装手册</p>
                <p class="document-options">
                  <span>下载</span>
                  <span>1.5M</span>
                  <span>PDF</span>
                  <span>2022/2/2</span>
                </p>
              </div>
              <div class="content-item-document">
                <p class="document-title">安装手册</p>
                <p class="document-options">
                  <span>下载</span>
                  <span>1.5M</span>
                  <span>PDF</span>
                  <span>2022/2/2</span>
                </p>
              </div>
            </div>
          </div>
          <div v-if="activeName == '4' || activeName == '5'" class="tab-content-item">
            <div class="content-item-products">
              <div class="content-item-product">
                <img
                  src="https://www.emerson.cn/resource/image/8675372/landscape_ratio16x9/600/338/e0f41ee4d5bb3cefda70e683b8e203a9/80F58DFAE472F4E43FDD7C01063E6CDA/corrosion%20monitoring%20technologies%20for%20de-ethanizer%20towers.jpg"
                />
                <p class="document-title">脱乙烷塔腐蚀监测技术</p>
              </div>
              <div class="content-item-product">
                <img
                  src="https://www.emerson.cn/resource/image/8675372/landscape_ratio16x9/600/338/e0f41ee4d5bb3cefda70e683b8e203a9/80F58DFAE472F4E43FDD7C01063E6CDA/corrosion%20monitoring%20technologies%20for%20de-ethanizer%20towers.jpg"
                />
                <p class="document-title">脱乙烷塔腐蚀监测技术</p>
              </div>
              <div class="content-item-product">
                <img
                  src="https://www.emerson.cn/resource/image/8675372/landscape_ratio16x9/600/338/e0f41ee4d5bb3cefda70e683b8e203a9/80F58DFAE472F4E43FDD7C01063E6CDA/corrosion%20monitoring%20technologies%20for%20de-ethanizer%20towers.jpg"
                />
                <p class="document-title">脱乙烷塔腐蚀监测技术</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const activeName = ref(1)
const handleClick = () => {}
</script>

<style scoped lang="scss">
.product-detail_container {
  padding: 20px 200px;
  .breadcrumb {
    margin-bottom: 20px;
  }
  .product-detail {
    margin-top: 10px;
    .detail-top {
      display: flex;
      height: 400px;
      .swiper {
        width: 600px;
        border: 1px solid #efefef;
        .small {
          text-align: center;
          font-size: 40px;
          line-height: 400px;
        }
        .el-carousel__item h3 {
          color: #475669;
          font-size: 14px;
          opacity: 0.75;
          line-height: 150px;
          margin: 0;
        }
        .el-carousel__item:nth-child(2n) {
          background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n + 1) {
          background-color: #d3dce6;
        }
      }
      .detail-info {
        flex: 1;
        // border: 1px solid #efefef;
        margin-left: 20px;
        .info-title {
          font-size: 24px;
        }
        .info-options {
          display: flex;
          margin-top: 30px;
          .option-btn {
            display: inline-block;
            flex: 1;
            height: 48px;
            background-color: #00573d;
            margin-right: 10px;
            justify-content: space-between;
            color: #fff;
            line-height: 48px;
            text-align: center;
            font-size: 18px;
            max-width: 280px;
          }
          .option-btn:last-child {
            margin-right: 0px;
          }
        }
        .info-desc {
          border-top: 1px solid #efefef;
          border-bottom: 1px solid #efefef;
          padding: 20px 0px;
          margin-top: 40px;
          .info-desc-title {
            font-size: 14px;
            font-weight: bold;
          }
          .info-desc-content {
            font-size: 14px;
            font-weight: 400;
            margin-top: 10px;
          }
        }
      }
    }
    .detail-sku {
      margin-top: 20px;
      .sku-info {
        min-height: 200px;
        .tab-content-item {
          padding: 20px 40px;
          .content-item-sku {
            margin-bottom: 16px;
            .item-sku-title {
              font-weight: bold;
              margin-right: 16px;
            }
          }
          .content-item-documents {
            display: flex;
            .content-item-document {
              border: 1px solid #efefef;
              padding: 20px;
              margin-right: 20px;
              .document-title {
                font-size: 14px;
                font-weight: bold;
              }
              .document-options {
                span {
                  display: inline-block;
                  padding: 0px 5px;
                  background-color: #efefef;
                  margin-right: 8px;
                  font-size: 10px;
                  cursor: pointer;
                }
              }
            }
          }
          .content-item-products {
            display: flex;
          }
          .content-item-product {
            width: 200px;
            margin-right: 30px;
            img {
              width: 100%;
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
