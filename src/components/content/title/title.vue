<template>
  <div class="play-title">
    <i><slot name="item-icon"></slot></i>
    <h1><slot name="item-title"></slot></h1>
    <p><slot name="item-advertise"></slot></p>
  </div>
</template>

<script>
export default {
  name: "PlayTitle",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
/* 标题 */

.play-title {
  width: 100%;
  padding: 20px 0px 20px 0px;
}

.play-title div {
  display: inline-block;
  margin-left: 10px;
}

.play-title i {
  display: inline-block;
  vertical-align: middle;
}

.play-title img {
  width: 32px;
  height: 32px;
}

.play-title h1 {
  display: inline-block;
  vertical-align: bottom;
  font-weight: inherit;
  margin-left: 10px;
  letter-spacing: 2px;
}

.play-title p {
  display: inline-block;
  vertical-align: bottom;
  margin-left: 10px;
}

.play-title-font-tow {
  height: 34px;
}
</style>