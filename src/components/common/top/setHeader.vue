<template>
  <div class="headBox">
    <div class="head">
      <!-- logo -->
      <div class="logo">
        <img src="@/assets/images/top/logo.png" alt="" />
      </div>

      <naviList></naviList>
      <register></register>
    </div>
    <div class="content">
      <div class="seek-one">
        <div class="seek-one-icon">
          <img src="@/assets/images/home/seek.png" alt="" />
        </div>
        <div class="seek-one-input">
          <input type="font" placeholder="搜索您想要的内容" />
        </div>
        <div class="seek-one-button">
          <button>搜索</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import register from "./chil/register.vue";
import naviList from "./chil/naviList.vue";

export default {
  name: "PlayGetHeader",

  data() {
    return {};
  },
  components: {
    naviList,
    register,
  },
  mounted() {},

  methods: {},
};
</script>

<style scoped lang="less">
.headBox {
  width: 100%;
  min-height: 60px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0px;
  left: 0;
  background-color: #ffffff;
  z-index: 100;

  .head {
    width: 1200px;
    height: 60px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
}

// logo
.logo {
  display: inline-block;
}

.content {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.seek-one {
  display: flex;
  align-items: center;
  border: 1px var(--backColor) solid;
  border-radius: 10px;
  overflow: hidden;
}

.seek-one-icon {
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 12px;
}

.seek-one-icon img {
  width: 100%;
}

.seek-one-input {
  width: 590px;
  display: inline-block;
}

.seek-one-input input {
  width: 99%;
  line-height: 38px;
  font-size: 16px;
  color: #999999;
  vertical-align: middle;
  border: none;
}

.seek-one-input input::-webkit-input-placeholder {
  color: #999999;
}

.seek-one-button {
  width: 114px;
  height: 40px;
}

.seek-one-button button {
  width: 114px;
  height: 40px;
  background-color: var(--backColor);
  color: #ffffff;
  border-radius: 0px 8px 8px 0px;
  cursor: pointer;
  font-size: 18px;
  border: none;
}
</style>