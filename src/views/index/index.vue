<template>
  <div>
    <div class="content"><portal></portal></div>
    <div class="content"><inputBox></inputBox></div>
    <div class="box">
      <div class="content">
        <ShortPlay></ShortPlay>
      </div>
    </div>
    <div class="content">
      <getVideo></getVideo>
    </div>
    <div class="content">
      <thirdpartnar></thirdpartnar>
    </div>
    <div class="content">
      <information></information>
    </div>
    <getBase></getBase>
  </div>
</template>

<script>
import ShortPlay from "./child/ShortPlay.vue";
import portal from "./child/portal.vue";
import getVideo from "./child/video.vue";
import thirdpartnar from "./child/thirdpartnar.vue";
import information from "./child/information.vue";

export default {
  name: "PlayIndex",

  data() {
    return {};
  },
  components: {
    portal,
    ShortPlay,
    getVideo,
    thirdpartnar,
    information,
  },

  created() {},

  destroyed() {},
};
</script>

<style scoped>
.box {
  background-color: #f3f3f3;
}
</style>