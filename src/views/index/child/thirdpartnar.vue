<template>
  <div>
    <getTitle>
      <template slot="item-icon">
        <img src="@/assets/images/home/10.png" alt="" />
      </template>
      <template slot="item-title"> 短剧本 </template>
      <template slot="item-advertise"> 短剧本标题宣传语 </template>
    </getTitle>

    <ul class="thirdpartnar-content-one">
      <!-- 盒子内容 -->
      <li class="thirdpartnar-one" v-for="item in priceCategory" :key="item.id">
        <!-- 标题 -->
        <div class="thirdpartnar-one-title">
          <i><img :src="item.icon" alt="" /></i>
          <h2>{{ item.title }}</h2>
        </div>
        <div class="thirdpartnar-middle">
          <!-- 下面内容 -->
          <p>规格标准：{{ item.standard }}</p>
          <p>内容形式：{{ item.form }}</p>
          <p>服务内容：{{ item.service }}</p>
          <p>视频数量：{{ item.video }}</p>
          <p>服务时长：{{ item.time }}</p>
        </div>

        <!-- 价格 -->
        <div class="price">
          <p>¥</p>
          <p>{{ item.price }}</p>
        </div>
        <div class="gray">
          <p>可选</p>
        </div>
        <div class="thirdpartnar">
          <button>获取报价</button>
        </div>
      </li>
      <li class="thirdpartnar-one">
        <!-- 标题 -->
        <div class="thirdpartnar-one-title">
          <i><img src="@/assets/images/home/13.png" alt="" /></i>
          <h2>运营诊断服务</h2>
        </div>
        <div class="thirdpartnar-middle">
          <!-- 下面内容 -->
          <p>对于自运营服务,</p>
          <p>我们有专业的运营团队针对帐号</p>
          <p>用户少、流量少、转化低、涨粉慢务</p>
          <p>等问题进行诊断并提供解决方案的服务</p>
          <!-- <p>服务时长</p> -->
        </div>

        <!-- 价格 -->
        <div class="price">
          <p>¥</p>
          <p>???</p>
        </div>
        <div class="gray">
          <p>每天免费5个名额</p>
        </div>
        <div class="thirdpartnar">
          <button>获取报价</button>
        </div>
      </li>
    </ul>
    <!-- 按钮 -->
    <div class="customization-button">
      <button>查看详情 ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayThirdpartnar",

  data() {
    return {
      priceCategory: [
        {
          id: 0,
          // 标题
          title: "企业入门级服务",
          // 图标
          icon: require("@/assets/images/home/12.png"),
          // 标准
          standard: "60s以内",
          // 内容形式
          form: "商品展示",
          // 服务内容
          service: "全套运营服务",
          // 视频数量
          video: "15条",
          // 服务时长
          time: "",
          // 价格
          price: "???",
        },
        {
          id: 1,
          title: "企业IP版服务",
          icon: require("@/assets/images/home/12.png"),
          standard: "60s以内",
          form: "商品展示",
          service: "全套运营服务",
          video: "15条",
          time: "",
          price: "???",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.thirdpartnar-content-one {
  display: flex;
  justify-content: space-between;
}

.thirdpartnar-one {
  width: 386px;
  height: 466px;
  border: 1px #f62959 solid;
  border-radius: 20px;
  text-align: center;
}

/* 标题 */

.thirdpartnar-one-title img {
  vertical-align: middle;
  display: inline-block;
}

.thirdpartnar-one-title {
  margin-top: 40px;
}

.thirdpartnar-one-title h2 {
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
}

.thirdpartnar-middle {
  height: 170px;
}

.thirdpartnar
/* 价格 */

.price p {
  height: 20px;
  color: #faad00;
}

.price p:nth-of-type(1) {
  font-size: 18px;
  display: inline-block;
  color: #faad00;
}

.price p:nth-of-type(2) {
  font-size: 30px;
  display: inline-block;
  color: #faad00;
  letter-spacing: 2px;
}

.thirdpartnar-one p {
  font-size: 18px;
  line-height: 30px;
}

.thirdpartnar-one p:nth-of-type(1) {
  margin-top: 20px;
}

.thirdpartnar-one p:nth-of-type(7) {
  color: #999999;
  line-height: 50px;
}

.gray p {
  color: #999999;
  font-size: 14px;
}

.thirdpartnar {
  width: 100%;
  margin-top: 6px;
}

.thirdpartnar button {
  width: 170px;
  height: 50px;
  border-radius: 25px;
  color: #ffffff;
  background-color: #f62959;
  font-size: 18px;
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