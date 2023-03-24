<template>
  <div class="banner">
    <!--轮播图 -->
    <div class="slideshow">
      <div class="block">
        <el-carousel height="400px" trigger="click" class="block_one">
          <el-carousel-item v-for="item in bannerImage" :key="item">
            <!-- <h3 class="small"> {{ item }}</h3> -->
            <img :src="item" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 个人中心 -->
    <div class="personal-center">
      <!-- 头像 -->
      <div class="head-box">
        <div class="head-img">
          <div class="head-content">
            <img src="@/assets/images/home/1.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 游客 -->
      <div class="visitor_box">
        <div class="visitor">
          <div class="visitor-font">
            <span
              >游客：
              <p>12345678</p></span
            >
          </div>
        </div>
        <!-- 登录注册 -->
        <div class="enter-login-button">
          <div class="enter-login-button-box">
            <button>登录/注册</button>
          </div>
        </div>
      </div>
      <!-- 已登录后的样式 -->
      <div class="Is_now_box">
        <!-- 昵称 -->
        <div class="nickname_box">
          <div class="nickname">
            <i><img src="@/assets/images/home/240.png" alt="" /></i>
            <p>我的昵称</p>
          </div>
        </div>
        <!-- 账号 -->
        <div class="account_box">
          <p>账号：108427847</p>
        </div>
        <!-- 收藏 订单 福利  -->
        <div class="I_bottom">
          <!-- 收藏 -->
          <div class="I_bottom_content">
            <ul>
              <li>
                <i><img src="@/assets/images/home/60.png" alt="" /></i>
              </li>
              <li>收藏</li>
            </ul>
          </div>
          <!-- 订单 -->
          <div class="I_bottom_content">
            <ul>
              <li>
                <i><img src="@/assets/images/home/61.png" alt="" /></i>
              </li>
              <li>订单</li>
            </ul>
          </div>
          <!-- 福利 -->
          <div class="I_bottom_content">
            <ul>
              <li>
                <i><img src="@/assets/images/home/62.png" alt="" /></i>
              </li>
              <li>福利</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayPortal",

  data() {
    return {
      bannerImage: [
        require("@/assets/images/home/14.png"),
        require("@/assets/images/home/15.png"),
        require("@/assets/images/home/16.png"),
        require("@/assets/images/home/17.png"),
        require("@/assets/images/home/18.png"),
        require("@/assets/images/home/19.png"),
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.banner {
  width: 1200px;
  height: 400px;
  margin: auto;
  display: flex;
  margin-top: 10px;
}

/* 轮播图 */

.slideshow {
  width: 900px;
  height: 400px;
}

.block_one {
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
}

.el-carousel__item img {
  width: auto;
  height: auto;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/* 个人中心 */

.personal-center {
  width: 290px;
  height: 400px;
  margin-left: 20px;
  border-radius: 20px;
  background-image: url("@/assets/images/home/2.png");
  background-size: 100%;
}

.head-box {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}

.head-img {
  width: 108px;
  height: 108px;
  border-radius: 50%;
  background-color: #fec675;
}

.head-content {
  width: 108px;
  height: 108px;
}

.head-content img {
  border-radius: 50%;
  border: 3px #fec675 solid;
  vertical-align: top;
}

/* 游客 */

.visitor_box {
  display: none;
}

.visitor {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.visitor-font {
  color: #ffffff;
  font-size: 20px;
  font-family: PingFang HK;
}

.visitor span {
  font-size: 20px;
}

.visitor p {
  display: inline-block;
  font-size: 20px;
}

/* 登录注册按钮 */

.enter-login-button {
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.enter-login-button-box button {
  width: 152px;
  height: 50px;
  border-radius: 25px;
  background-color: #f62959;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
}

/* 已登录后的样式 */

.Is_now_box {
  width: 237px;
  height: auto;
  margin: auto;
}

/* 昵称 */

.nickname_box {
  width: 100%;
  display: flex;
  justify-content: stretch;
}

.nickname {
  margin: auto;
  display: flex;
  align-items: stretch;
}

.nickname i img {
  width: 26px;
  height: 26px;
  vertical-align: bottom;
  margin-right: 4px;
}

.nickname p {
  font-size: 20px;
  color: white;
}

/* 账号 */

.account_box {
  margin-top: 15px;
  text-align: center;
}

.account_box p {
  color: white;
  font-size: 16px;
}

/* 我的下面的内容 */

.I_bottom {
  width: 100%;
  height: 100px;
  display: flex;
  margin-top: 20px;
}

.I_bottom_content {
  width: 33.3%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.I_bottom_content ul li {
  font-size: 14px;
  color: #ffffff;
  text-align: center;
}
</style>