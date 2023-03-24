<template>
  <div>
    <getTop></getTop>

    <div class="isTopShow">
      <setTop v-show="isVisable"></setTop>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "PlayApp",

  data() {
    return {
      isVisable: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },

  methods: {
    handleScroll() {
      if (window.pageYOffset >= 560) {
        this.isVisable = true;
      } else {
        this.isVisable = false;
      }
    },
  },
};
</script>

<style scoped>
</style>