<template>
  <div class="base">
    <!-- 企业实力 -->
    <div class="corporate_strength-box">
      <div class="corporate_strength-background"></div>
      <ul class="corporate_strength">
        <li
          class="corporate_strength-one"
          v-for="item in strengthList"
          :key="item.id"
        >
          <div class="strength-one">
            <i> <img :src="item.icon" alt="" /></i>
            <p>{{ item.title }}</p>
          </div>
          <div class="strength-three">
            <h2>{{ item.quantity }}</h2>
          </div>
        </li>
      </ul>
    </div>

    <!-- 底部 -->
    <div class="bottom-box">
      <div class="bottom">
        <!-- 底部左边 -->
        <div class="bottom-left">
          <!-- 底部logo -->
          <div class="bottom-left-logo">
            <i><img src="@/assets/images/home/logo.png" alt="" /></i>
            <p>宣传标语宣传标语</p>
          </div>
          <!-- 备案号 -->
          <div class="put_on_records">
            <p>
              备案号：<span>湘ICP备15014315号-10</span> | <span>营业执照</span>
            </p>
          </div>
          <div class="put_on_records-font">
            <i><img src="@/assets/images/home/26.png" alt="" /></i>
            <p>沪公网安备 31011502006998号</p>
          </div>
          <!-- 经营许可证编号 -->
          <div>
            <p>增值电信业务经营许可证编号： 湘B2-20200010</p>
          </div>
          <!-- 版权 -->
          <div>
            <p>Copyright © 2020 某某某科技有限公司 版权所有</p>
          </div>
          <!-- 下面三个图片 -->
          <div>
            <i><img src="@/assets/images/home/28.png" alt="" /></i>
            <i><img src="@/assets/images/home/27.png" alt="" /></i>
            <i><img src="@/assets/images/home/30.png" alt="" /></i>
          </div>
        </div>
        <!-- 底部中间 -->
        <div class="bottom-middle">
          <div class="bottom-middle-left"></div>
          <div class="bottom-middle-right">
            <!-- 客服信息 -->
            <div class="message-one">
              <ul>
                <li>
                  <p>客服服务</p>
                  <ul>
                    <li>客服电话</li>
                    <li>客服微信</li>
                    <li>客服QQ</li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- 友情链接 -->
            <div class="message-one">
              <ul>
                <li>
                  <p>友情链接</p>
                  <ul>
                    <li>抖音短视频</li>
                    <li>快手小视频</li>
                    <li>火山小视频</li>
                    <li>腾讯视频</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 底部右边 -->
        <div class="bottom-right">
          <p>微信公众号</p>
          <div class="QR_code">
            <img src="@/assets/images/home/31.png" alt="" />
            <img src="@/assets/images/home/31.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayBase",

  data() {
    return {
      strengthList: [
        {
          id: 0,
          title: "剧本总数",
          icon: require("@/assets/images/home/38.png"),
          quantity: "10万+",
        },
        {
          id: 1,
          title: "编剧",
          icon: require("@/assets/images/home/22.png"),
          quantity: "10万+",
        },

        {
          id: 2,
          title: "配音师",
          icon: require("@/assets/images/home/23.png"),
          quantity: "274名",
        },
        {
          id: 3,
          title: "导员&演员",
          icon: require("@/assets/images/home/24.png"),
          quantity: "47名",
        },
        {
          id: 4,
          title: "服务机构",
          icon: require("@/assets/images/home/25.png"),
          quantity: "130家",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
/* 企业实力 */

.corporate_strength-box {
  padding-top: 10px;
  min-width: 1200px;
  background-image: url("@/assets/images/home/20.png");
  padding-bottom: 20px;
  background-size: 100% 100%;
}

.corporate_strength {
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.corporate_strength-one div {
  margin-top: 10px;
}
.strength-one {
  position: relative;
}
.strength-one::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 40px;
  height: 3px;
  background-color: #e0dedf;
}
.strength-one i,
.strength-one p {
  display: inline-block;
  vertical-align: middle;
  font-size: 18px;
}

.strength-one i {
  width: 33px;
  height: 33px;
  transition: 0.5s;
}

.strength-one i img {
  width: 33px;
  height: 33px;
}

.corporate_strength-one:hover h2 {
  color: #f62959;
}

.corporate_strength-one:hover i {
  transform: rotate(360deg);
}

.strength-one p {
  margin-left: 10px;
  color: #434343;
  font-size: 24px;
}

.strength-tow {
  width: 40px;
  height: 3px;
  background-color: #e0dedf;
  margin-left: 3%;
}

.strength-three {
  height: 40%;
}

.strength-three h2 {
  color: #666666;
  font-size: 28px;
}
/* 底部 */

.bottom-box {
  width: 100%;
  min-width: 1200px;
  background-color: #f0f3f5;
  z-index: 10;
  position: absolute;
  padding-top: 36px;
}

.bottom {
  width: 1200px;
  margin: auto;
  display: flex;
}
/* 底部左边 */

.bottom-left {
  width: 33.3%;
  height: 260px;
}

.bottom-left p {
  font-size: 14px;
  color: #333333;
  line-height: 30px;
}
/* 底部logo */

.bottom-left-logo {
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
}

.bottom-left-logo p {
  margin-left: 10px;
  font-size: 16px;
}
/* 备案号 */

.put_on_records span {
  cursor: pointer;
}

.put_on_records-font {
  display: flex;
  align-items: center;
}

.put_on_records-font > i > img {
  vertical-align: middle;
}

.put_on_records-font p {
  cursor: pointer;
}

.bottom-left div:nth-last-of-type(1) {
  margin-top: 10px;
}
/* 底部中间 */

.bottom-middle {
  width: 33.3%;
  height: 260px;
  display: flex;
}

.bottom-middle-left {
  width: 30%;
}

.bottom-middle-right {
  width: 70%;
  display: flex;
  justify-content: space-between;
}
/* 客服信息 */

.bottom-middle div {
  display: inline-block;
  vertical-align: top;
}

.bottom-middle div:nth-of-type(2) {
  margin-left: 50px;
}

.message-one ul > li {
  font-size: 14px;
  color: #333333;
  line-height: 30px;
}

.message-one ul > li > p {
  height: 52px;
  line-height: 52px;
  font-weight: 600;
  text-align: center;
}

.message-one ul > li > ul > li {
  line-height: 30px;
  cursor: pointer;
}
/* 底部右边 */

.bottom-right {
  width: 33.3%;
  height: 260px;
}

.bottom-right p {
  height: 52px;
  line-height: 52px;
  font-size: 14px;
  color: #333333;
  font-weight: 600;
}

.QR_code {
  width: 100%;
  display: flex;
}

.QR_code img {
  margin: 0px 10px 0px 0px;
}
</style>