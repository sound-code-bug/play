<template>
  <div class="box">
    <div class="tab-1">
      <!-- 标题 -->
      <div class="tab-title-font">
        <!-- 前面的竖线 -->
        <div class="tab-one"></div>
        <div class="tab-title">
          <p>喜欢往别人的伤口上撒盐？</p>
        </div>
      </div>
      <!-- 文字内容 -->
      <div class="tab-font">
        <p>
          农民男人拿着一袋橘子放在桌上尴尬 男：老板我能在这住下用橘子顶替房租吗
          老板看着橘子不满 老板：这是客栈不是菜市场…
        </p>
      </div>
      <!-- 标签 -->
      <div class="label">
        <div>剧本定制</div>
        <div>剧本定制</div>
        <div>剧制</div>
        <div>剧制</div>
        <div>剧本定制</div>
        <div>剧制</div>
        <div>剧制</div>
        <div>剧制</div>
      </div>
      <!-- 个人信息 -->
      <div class="personal">
        <p><img src="@/assets/images/home/1.png" alt="" /></p>
        <p>善良的小姨子</p>
        <p>08-12 10:23</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayBreviary",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.tab {
  width: 100%;
  min-width: 1200px;
  height: 60px;
  line-height: 60px;
  background-color: #faeff1;
  /* font-size: 16px; */
  color: #000000;
  position: relative;
}

.tab > ul > li {
  width: 180px;
  height: 60px;
  font-size: 18px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  border: 1px #faeff1 solid;
}

.tab > ul > li:nth-last-of-type(1) {
  width: 57px;
  height: 28px;
  line-height: 28px;
  border-radius: 20px;
  font-size: 16px;
  color: #ffffff !important;
  background-color: #f62959;
  position: absolute;
  top: 25%;
  right: 30px;
}

.tab-1 {
  margin: 20px 20px 0px 0px;
  padding-left: 10px;
  padding-top: 2px;
  width: 380px;
  border-radius: 8px;
  background-color: #ffffff;
  cursor: pointer;
  box-shadow: 0px 0px 20px 0px rgba(246, 41, 89, 0.08);
  box-sizing: border-box;
  transition: 0.3s;
}

.tab-1:hover {
  transform: scale(1.1);
  box-shadow: 0px 0px 20px 0px rgba(246, 41, 89, 0.15);
}

.tab-title > p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.tab-title > p:hover {
  color: #f62959;
}

.tab_image {
  width: 100%;
  height: 160px;
  border-radius: 8px 8px 0px 0px;
}

.tab_image img {
  width: 100%;
  height: 160px;
  border-radius: 8px 8px 0px 0px;
}

.tab-title-font {
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-top: 10px;
}

.tab-one {
  width: 6px;
  height: 22px;
  border-radius: 25px;
  vertical-align: middle;
  margin: 0px 10px 0px 10px;
  background-color: #f62959;
}

.tab-title {
  vertical-align: middle;
  font-size: 20px;
  color: #333333;
}

/* 文字内容 */

.tab-font {
  width: 86%;
  margin: auto;
  font-size: 14px;
  color: #666666;
}

/* 标签 */

.label {
  width: 86%;
  margin: auto;
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px #fee9ee solid;
}

.label div {
  padding: 3px 8px 3px 8px;
  display: inline-block;
  background-color: #fff7f2;
  color: #ff5c0d;
  border-radius: 2px;
  margin: 4px;
}

/* 个人信息 */

.personal {
  width: 86%;
  margin: auto;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666666;
}

.personal p:nth-of-type(1) {
  margin: 0px 10px 0px 10px;
}

.personal img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}

.personal p:nth-of-type(2) {
  width: 50%;
}

.personal p:nth-of-type(3) {
  width: 40%;
  text-align: right;
}
</style>