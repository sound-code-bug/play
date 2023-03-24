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
  height: 60px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);

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
</style>