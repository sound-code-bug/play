<template>
  <div>
    <getTitle>
      <template slot="item-icon">
        <img src="@/assets/images/home/10.png" alt="" />
      </template>
      <template slot="item-title"> 行业资讯 </template>
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
      <div v-if="activeIndex === 0">
        <breviaryLong>
          <template slot="text">
            老板出门看到一外卖小哥坐在楼梯吃着面 老板：喂，你在这干嘛呢
            外卖小哥起来道歉 男：不好意思 老板指着包装烂了的
          </template>
        </breviaryLong>
      </div>
      <div v-else-if="activeIndex === 1">
        <breviaryLong></breviaryLong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayShortPlay",

  data() {
    return {
      btns: ["运营教程", "行业资讯"],
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
  min-height: 400px;
  padding-bottom: 20px;
  > div {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>