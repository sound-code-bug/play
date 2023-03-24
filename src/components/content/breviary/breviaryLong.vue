<template>
  <div class="container-one">
    <div class="container-one-left">
      <img src="@/assets/images/home/19.png" alt="" />
    </div>
    <div class="container-one-right">
      <h3>资讯标题</h3>
      <p>
        <slot name="text"></slot>
      </p>
      <p>10-34</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayBreviaryLong",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.container-one {
  width: 550px;
  height: 176px;
  border: 1px #f0f3f5 solid;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  margin-top: 30px;
  cursor: pointer;
  transition: 0.3s;
}

.container-one:hover {
  transform: scale(1.1);
  box-shadow: 0px 0px 20px 0px rgba(246, 41, 89, 0.15);
}

.container-one-left {
  width: 260px;
  height: 176px;
}

.container-one-left img {
  width: 100%;
  vertical-align: middle;
}

.container-one-right {
  width: 290px;
  margin-left: 10px;
  line-height: 22px;
}

.container-one-right h3 {
  width: 94%;
  margin: auto;
  padding: 20px 0px 10px 0px;
  font-size: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.container-one-right h3:hover {
  color: #f62959;
}

.container-one-right p {
  width: 94%;
  margin: auto;
  font-size: 14px;
  color: #333333;
}

.container-one-right p:nth-of-type(1) {
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: elipsis;
}

.container-one-right p:nth-of-type(2) {
  line-height: 40px;
  /*   */
  text-align: right;
}
</style>