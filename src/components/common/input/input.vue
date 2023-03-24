<template>
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
</template>

<script>
export default {
  name: "PlayInput",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.content {
  height: 130px;
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