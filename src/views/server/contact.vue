<template>
  <div class="server-container">
    <p class="server-title">联系我们</p>
    <p class="other-help-title">公司信息</p>
    <div class="company-info">
      <!-- <p class="company-title">公司信息</p> -->
      <div class="company-detail">
        <p class="company-item company-name">北京广源科佑技术发展有限公司</p>
        <p class="company-item">上海市浦东新区新金桥路1277号</p>
        <p class="company-item">上海 201206</p>
        <p class="company-item">中国</p>
        <p class="company-item">电话: 400 820 1996</p>
        <p class="company-item">传真: +86 21 2892 9001</p>
      </div>
    </div>
    <div class="wechat-container"></div>

    <p class="other-help-title">其他帮助</p>
    <div class="other-help">
      <div class="help-item">联系我们</div>
      <div class="help-item">联系我们</div>
      <div class="help-item">联系我们</div>
      <div class="help-item">联系我们</div>
    </div>
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
  .company-info {
    margin-bottom: 20px;
    .company-detail {
      .company-item {
      }
      .company-name {
        font-size: 30px;
      }
    }
  }
  .wechat-container {
    background-image: url('https://www.emerson.cn/resource/image/10058962/landscape_ratio4x1/1200/300/76a5ef9ac8bed9390475440a9b6d43c7/BFD3BB39C4FB36D8A3FAA9BEB2C86D6A/vn015-social%20sharing%20(1).jpg');
    height: 250px;
    width: 100%;
    background-size: cover;
    margin-bottom: 40px;
    margin-top: 40px;
    position: relative;
  }
  .wechat-container::after {
    position: absolute;
    content: '';
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba($color: #000000, $alpha: 0.5);
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
