<template>
  <div class="product-container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">产品列表</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="product-filter">
      <div class="product-category">
        <el-link class="category-item" type="primary">探测器(3)</el-link>
        <el-link class="category-item" type="success">探针(2)</el-link>
        <el-link class="category-item" type="warning">探测器(3)</el-link>
        <el-link class="category-item" type="danger">探测器(3)</el-link>
        <el-link class="category-item" type="info">探测器(3)</el-link>
      </div>
    </div>
    <div class="product-list">
      <div class="product-item" v-for="(item, index) in list" :key="index">
        <img
          class="product-img"
          src="https://www.emerson.cn/resource/image/5388094/portrait_ratio1x1/176/176/c919fb87edf5662e4f5d07919c28e830/6AD303562FD5B368FC99D16E815FABAF/prod_rox_sam.jpg"
        />
        <div class="product-item-info">
          <p>罗斯蒙特™ 无线 Permasense ET310 腐蚀和侵蚀监测系统</p>
          <a class="more" @click="toProductPage">查看详情</a>
          <div class="info-option">询价</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ElBreadcrumb, ElBreadcrumbItem, ElLink } from 'element-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const list = ref([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}])
const toProductPage = () => {
  router.push(`/product/detail`)
}
</script>
<style scoped lang="scss">
.product-container {
  padding: 20px 200px;
  .breadcrumb {
  }
  .product-filter {
    margin-top: 20px;
    border-bottom: 1px solid #efefef;
    padding-bottom: 20px;
    .product-category {
      .category-item {
        margin-right: 10px;
      }
    }
  }
  .product-list {
    padding: 20px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .product-item {
      border: 1px solid #efefef;
      width: 280px;
      text-align: center;
      margin-right: 20px;
      margin-bottom: 20px;
      .product-img {
        width: 160px;
        height: 160px;
      }
      .product-item-info {
        text-align: left;
        padding: 20px 10px;
        .more {
          display: block;
          margin-top: 20px;
          cursor: pointer;
        }
        .info-option {
          background-color: #00573d;
          color: #fff;
          width: 100%;
          height: 48px;
          margin-right: 20px;
          line-height: 48px;
          text-align: center;
          cursor: pointer;
          margin-top: 30px;
        }
      }
    }
  }
}
</style>
