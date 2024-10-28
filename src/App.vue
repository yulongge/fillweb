<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ElButton, ElTabs, ElTabPane, DrawerProps, ElIcon } from 'element-plus'
import { UserFilled, Search, Avatar, ArrowRightBold } from '@element-plus/icons-vue'
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeName = ref('first')
const drawer = ref(false)
const direction = ref<DrawerProps['direction']>('ttb')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab.paneName, 'tab')
  if (tab.paneName == 'fourth') {
    router.push('/server')
    return
  }
  if (tab.paneName == 'fivth') {
    router.push('/contact')
    return
  }
  drawer.value = true
}
const handleMouseLeave = () => {
  drawer.value = false
}
</script>

<template>
  <div class="header-menu" @mouseleave="handleMouseLeave">
    <div class="logo-con">
      <img src="../src/assets/favicon.ico" />
    </div>
    <el-tabs v-model="activeName" class="menu-tabs" @tab-click="handleClick">
      <el-tab-pane label="产品" name="first"></el-tab-pane>
      <el-tab-pane label="软件" name="second"></el-tab-pane>
      <!-- <el-tab-pane label="行业" name="third"></el-tab-pane> -->
      <el-tab-pane label="服务与支持" name="fourth"></el-tab-pane>
      <el-tab-pane label="联系我们" name="fivth"></el-tab-pane>
    </el-tabs>
    <div class="options">
      <el-icon size="24" class="option-item"><Search /></el-icon>
      <el-icon size="24" class="option-item"><Avatar /></el-icon>
    </div>
    <div class="menu-container" :class="{ 'show-drawer': drawer }">
      <div class="menu-container-main" :class="{ 'show-menu-container-main': drawer }">
        <div class="container-item root-container">
          <div class="root-menu">
            <div class="menu-item">
              <span>探针设备</span>
              <el-icon size="12"><ArrowRightBold /></el-icon>
            </div>
            <div class="menu-item">
              <span>探针设备</span>
              <el-icon size="12"><ArrowRightBold /></el-icon>
            </div>
            <div class="menu-item">
              <span>探针设备</span>
              <el-icon size="12"><ArrowRightBold /></el-icon>
            </div>
            <div class="menu-item">
              <span>探针设备</span>
              <el-icon size="12"><ArrowRightBold /></el-icon>
            </div>
            <div class="menu-item">
              <span>探针设备</span>
              <el-icon size="12"><ArrowRightBold /></el-icon>
            </div>
            <div class="menu-item">
              <span>探针设备</span>
              <el-icon size="12"><ArrowRightBold /></el-icon>
            </div>
            <div class="menu-item">
              <span>探针设备</span>
              <el-icon size="12"><ArrowRightBold /></el-icon>
            </div>
            <div class="menu-item">
              <span>探针设备</span>
              <el-icon size="12"><ArrowRightBold /></el-icon>
            </div>
            <div class="menu-item">
              <span>探针设备</span>
              <el-icon size="12"><ArrowRightBold /></el-icon>
            </div>
            <div class="menu-item">
              <span>探针设备</span>
              <el-icon size="12"><ArrowRightBold /></el-icon>
            </div>
          </div>
        </div>
        <div class="second-container container-item container-item-gray">
          <div class="second-menu">
            <div class="menu-item">
              <span>探针设备</span>
              <el-icon size="12"><ArrowRightBold /></el-icon>
            </div>
          </div>
        </div>
        <div class="third-container container-item container-item-gray">
          <div class="third-menu">
            <div class="menu-item">
              <span>探针设备</span>
              <el-icon size="12"><ArrowRightBold /></el-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="main">
    <RouterView />
    <div class="main-footer">
      <!-- <div class="footer-top">
        <div class="footer-top-lf">
          <img src="../src/assets/favicon.ico" />
          <p class="footer-top-title">北京广源</p>
          <p class="footer-top-desc">
            艾默生是一家全球技术、软件和工程领先企业，致力于推动创新，让世界变得更加健康，更加安全，更加智能以及更可持续。
          </p>
        </div>
        <div class="footer-top-md">
          <p>关于我们</p>
          <p>领导层</p>
          <p>环境、社会与治理</p>
          <p>招贤纳士</p>
          <p>多元、公平与包容</p>
          <p>联系我们</p>
          <p>新闻中心</p>
        </div>
        <div class="footer-top-rt">
          <p>我们的社区</p>
        </div>
      </div> -->
      <div class="footer-bottom">
        <div class="footer-bottom-lf">
          <div class="logo-info">
            <img src="../src/assets/favicon.ico" />
            <p class="footer-top-title">北京广源</p>
          </div>
          <p class="footer-top-desc">
            艾默生是一家全球技术、软件和工程领先企业，致力于推动创新，让世界变得更加健康，更加安全，更加智能以及更可持续。
          </p>
        </div>
        <div class="footer-bottom-rf">
          <p>©2024 Emerson Electric Co.保留所有权利</p>
          <p>
            <span>隐私声明</span>
            <span>隐私声明</span>
            <span>隐私声明</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-menu {
  display: flex;
  align-items: center;
  padding: 0px 200px;
  border: 1px solid #dcdfe6;
  .logo-con {
    height: 32px;
    margin-right: 80px;
  }
  .menu-tabs {
    flex: 1;
    ::v-deep {
      .el-tabs {
        padding: 0px 10px;
      }
      .el-tabs__nav-scroll {
        padding: 0px 20px;
      }
      .el-tabs__item {
        height: 64px;
      }
      .el-tabs__header {
        margin-bottom: 0px;
      }
      .el-tabs__nav-wrap:after {
        height: 1px;
      }
    }
  }
  .options {
    .option-item {
      margin-right: 20px;
    }
  }
  .menu-container {
    display: none;
    position: fixed;
    top: 64px;
    left: 0px;
    right: 0px;
    z-index: 100;
    background-color: #fff;
    box-shadow:
      2px 1px 1px rgba(0, 0, 0, 0.12),
      0 0 6px 2px rgba(0, 0, 0, 0.04);
    padding: 10px 100px;
    .menu-container-main {
      display: none;
      .container-item {
        flex: 1;
        .menu-item {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          span {
            flex: 1;
            font-size: 12px;
          }
        }
      }
      .root-container {
        width: 300px;
        flex: unset;
        padding: 10px 20px;
      }
      .second-container {
        padding: 10px 20px;
        border-right: 1px solid #a5a5a5;
      }
      .third-container {
        padding: 10px 20px;
      }
      .container-item-gray {
        background-color: #efefef;
      }
    }
    .show-menu-container-main {
      display: flex;
      height: 340px;
      animation: mymove 1s ease-in-out;
    }
  }
  .show-drawer {
    display: block;
    // height: 340px;
    // animation: mymove 1s ease-in-out;
  }
  @keyframes mymove {
    0% {
      height: 0px;
    }
    100% {
      height: 340px;
    }
  }
  ::v-deep {
    .el-drawer.ttb {
      top: 64px;
    }
  }
}
.main-footer {
  // height: 400px;
  width: 100%;
  // background-color: #101010;
  // padding: 20px 120px;
  color: #fff;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #efefef;
  .footer-top {
    flex: 1;
    padding: 20px 200px;
    display: flex;
    .footer-top-lf {
      border-right: 1px solid #ffffff;
      padding: 0px 40px;
      text-align: center;
      .footer-top-title {
        font-size: 20px;
        margin-top: 10px;
      }
      .footer-top-desc {
        text-align: left;
        margin-top: 20px;
        line-height: 1.6;
      }
    }
    .footer-top-md {
      padding: 0px 40px;
    }
    .footer-top-rt {
      padding: 0px 40px;
    }
  }
  .footer-bottom {
    // height: 100px;
    // background-color: #000;
    padding: 20px 300px;
    font-size: 12px;
    display: flex;
    color: #0061a0;
    .footer-bottom-lf {
      flex: 1;
      .logo-info {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        img {
          margin-right: 10px;
        }
      }
    }
    .footer-bottom-rf {
      // flex: 1;
      text-align: right;
    }
  }
}
</style>
