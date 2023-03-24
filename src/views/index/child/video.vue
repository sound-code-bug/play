<template>
  <div class="customization">
    <!-- 短视频定制的背景 -->
    <div class="customization-background">
      <img src="@/assets/images/home/4.png" alt="" />
    </div>
    <!-- 短视频定制的内容 -->
    <div class="customization-box">
      <div class="customization-content">
        <!-- 短视频定制内容左边文字 -->
        <div class="customization-font">
          <!-- 图标+标题 -->
          <div class="customization-font-title">
            <i><img src="@/assets/images/home/6.png" alt="" /></i>
            <h1>短视频定制服务</h1>
          </div>
          <!-- 描述 -->
          <div class="describe">
            <p>一站式&全方位定制服务</p>
          </div>
          <!-- 分割线 -->
          <div class="cut-off_rule-box">
            <div class="cut-off_rule"></div>
          </div>
          <!-- 下面的图标 -->
          <div class="customization-icon">
            <div>
              <i><img src="@/assets/images/home/7.png" alt="" /></i>
              <p>剧本定制</p>
            </div>
            <div>
              <i><img src="@/assets/images/home/8.png" alt="" /></i>
              <p>有声录制</p>
            </div>
            <div>
              <i><img src="@/assets/images/home/9.png" alt="" /></i>
              <p>短视频制作</p>
            </div>
          </div>
        </div>
        <!-- 短视频定制内容右边的视频 -->
        <div class="customization-mp4"></div>
      </div>
      <!-- 按钮 -->
      <div class="customization-button">
        <button>查看详情 ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayVideo",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
/* 短视频定制服务的盒子 */
.customization-background {
  padding-top: 10px;
}
.customization-background img {
  position: absolute;
  left: -4%;
}

/* 短视频定制服务的内容 */

.customization-box {
  width: 1200px;
  height: 600px;
  position: relative;
}

.customization-content {
  width: 1200px;
  height: 410px;
  border-radius: 20px;
  background-image: url(@/assets/images/home/5.png);
  background-size: 100%;
  display: flex;
  margin-top: 40px;
}

/* 短视频左边的文字 */

.customization-font {
  width: 500px;
  height: 400px;
  border-radius: 20px 0px 0px 20px;
}

/* 标题 */

.customization-font-title {
  width: 87.2%;
  margin: auto;
  display: flex;
  padding: 20px 0px 20px 0px;
}

.customization-font-title h1 {
  font-weight: 500;
  margin-left: 10px;
  color: #ffffff;
  letter-spacing: 2px;
  -moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* 描述 */

.describe {
  width: 87.2%;
  line-height: 70px;
  margin: auto;
  color: #ffffff;
  font-size: 20px;
  letter-spacing: 4px;
}

.describe p {
  -moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* 分割线 */

.cut-off_rule-box {
  width: 87.2%;
  margin: auto;
}

.cut-off_rule {
  width: 120px;
  height: 6px;
  background-color: #ffffff;
}

/* 下面的图标 */

.customization-icon {
  width: 87.2%;
  height: 232px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  align-items: center;
}

.customization-icon p {
  color: #ffffff;
}

/* 短视频右边的视频 */

.customization-mp4 {
  width: 730px;
  height: 410px;
  border-radius: 0px 20px 20px 0px;
  background-color: #000000;
}

.customization-mp4 video {
  width: 730px;
  height: 410px;
  border-radius: 0px 20px 20px 0px;
  outline: none;
  border: none;
  cursor: pointer;
}

/* 按钮 */

.customization-button {
  width: 1200px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.customization-button button {
  width: 188px;
  height: 60px;
  background-color: #f62959;
  border-radius: 30px;
  font-size: 18px;
  color: #ffffff;
  box-shadow: 0px 0px 10px 2px rgba(246, 41, 89, 0.2);
  cursor: pointer;
}
</style>