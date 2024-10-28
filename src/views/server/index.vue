<template>
  <div class="server-container">
    <p class="server-title">手册和指南</p>
    <div class="help-list">
      <div class="help-title">查找您所需的艾默生产品和系统的技术文档</div>
      <div class="help-main">
        <div class="main-lf">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="产品类别" name="1">
              <div class="category-list">
                <div class="category-item" v-for="item in 5" :key="item">
                  <el-checkbox v-model="checked">电子探针 (20)</el-checkbox>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="文档类型" name="2">
              <div class="category-list">
                <div class="category-item" v-for="item in 5" :key="item">
                  <el-checkbox v-model="checked">白皮书</el-checkbox>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="语言" name="3">
              <div class="category-list">
                <div class="category-item" v-for="item in 2" :key="item">
                  <el-checkbox v-model="checked">中文</el-checkbox>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="品牌" name="4">
              <div class="category-list">
                <div class="category-item" v-for="item in 5" :key="item">
                  <el-checkbox v-model="checked">埃珀森</el-checkbox>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="main-rt">
          <div class="document-item" v-for="item in 5" :key="item">
            <p class="document-tag">手册与指南</p>
            <p class="document-title">
              快速安装指南: Rosemount™ 5408 液位变送器 采用 Modbus® 协议
            </p>
            <p class="document-desc">
              本《快速安装指南》提供安装 Rosemount 5408 液位变送器的基本指导。
            </p>
            <p class="document-info">
              <span>.PDF</span>
              <span>.6.4M</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <p class="other-help-title">其他帮助</p>
    <div class="other-help">
      <div class="help-item">联系我们</div>
      <div class="help-item">联系我们</div>
      <div class="help-item">联系我们</div>
      <div class="help-item">联系我们</div>
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeNames = ref(['1'])
const handleChange = () => {
  console.log('change')
}
const checked = ref(false)
</script>
<style scoped lang="scss">
.server-container {
  min-height: 600px;
  padding: 20px 200px;
  .server-title {
    font-size: 44px;
    text-align: center;
    margin-bottom: 20px;
  }
  .help-list {
    .help-title {
      font-size: 30px;
      border-top: 1px solid #efefef;
      // border-bottom: 1px solid #efefef;
      height: 100px;
      line-height: 100px;
      text-align: center;
      font-weight: 300;
    }
    .help-main {
      display: flex;
      margin-bottom: 20px;
      .main-lf {
        width: 300px;
        // padding: 20px;
      }
      .main-rt {
        flex: 1;
        border-top: 1px solid #efefef;
        border-left: 1px solid #efefef;
        .document-item {
          border-bottom: 1px solid #efefef;
          padding: 20px;
          .document-tag {
            font-size: 0.75em;
            font-weight: 600;
            letter-spacing: 0.08em;
            margin-bottom: 9px;
            text-transform: uppercase;
          }
          .document-title {
            color: #00573d;
            font-weight: 500;
            margin-bottom: 6px;
          }
          .document-desc {
            font-weight: 300;
            margin-right: -1em;
            max-height: 3.25em;
            overflow: hidden;
            padding-right: 1em;
            position: relative;
            text-align: justify;
          }
          .document-info {
            font-weight: 600;
            margin-top: 20px;
            span {
              margin-right: 20px;
            }
          }
        }
        .document-item:last-child {
          border-bottom: unset;
        }
      }
    }
  }
  .other-help-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .other-help {
    display: flex;
    margin-bottom: 40px;
    .help-item {
      width: 300px;
      height: 80px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      margin-right: 20px;
      line-height: 80px;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
