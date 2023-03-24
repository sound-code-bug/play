<template>
  <div>
    <getTitle>
      <template slot="item-icon">
        <img src="@/assets/images/home/10.png" alt="" />
      </template>
      <template slot="item-title"> 短剧本 </template>
      <template slot="item-advertise"> 短剧本标题宣传语 </template>
    </getTitle>
    <div class="tag">
      <ul>
        <li
          v-for="(item, index) in btns"
          :key="index"
          :class="activeIndex == index ? 'btnAtive' : ''"
          @click="handleToggle(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="container">
      <div v-show="activeIndex === 0">
        <breviary></breviary>
        <breviary></breviary>
        <breviary></breviary>
        <breviary></breviary>
      </div>
      <div v-show="activeIndex === 1">
        <breviary></breviary>
        <breviary></breviary>
      </div>
      <div v-show="activeIndex === 2">
        <breviary></breviary>
        <breviary></breviary>
        <breviary></breviary>
        <breviary></breviary>
        <breviary></breviary>
        <breviary></breviary>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayShortPlay",

  data() {
    return {
      btns: ["搞笑段子", "短剧本", "短文"],
      activeIndex: 0,
    };
  },

  mounted() {},

  methods: {
    handleToggle(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style scoped lang="less">
.tag {
  width: 100%;
  min-width: 1200px;
  height: 60px;
  line-height: 60px;
  background-color: #faeff1;
  /* font-size: 16px; */
  color: #000000;
  position: relative;

  li {
    width: 180px;
    height: 60px;
    font-size: 18px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    border: 1px #faeff1 solid;
  }
}
.btnAtive {
  background: #f62959;
  color: #fff;
  border-radius: 10px;
}
.container {
  min-height: 300px;
  padding-bottom: 20px;
  > div {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>