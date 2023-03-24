<template>
  <ul class="list">
    <li
      v-for="(item, index) in navigationList"
      :key="index"
      @click="skip(index, item)"
      :class="{ active: message == index }"
      @mouseenter="headEnter(index)"
      @mouseleave="headLeave(IndexHover)"
    >
      <p>
        {{ item.title }}
      </p>
    </li>

    <div
      class="listContent"
      @mouseenter="Enter()"
      @mouseleave="Leave()"
      v-show="IndexShow ? boxShow : ''"
      ref="H"
      :style="'bottom:-' + CH"
    >
      <!-- <div class="box" v-if="show">
        <ul>
          <li></li>
        </ul>
      </div> -->
      <div v-for="item in content" :key="item.id">
        <i class="iconfont" :class="item.icon"></i>

        <p>{{ item.title }}</p>
      </div>
    </div>
  </ul>
</template>

<script>
import topList from "../json/topHeadList.json";

export default {
  name: "PlayNaviList",

  data() {
    return {
      navigationList: null,
      // list: null,
      message: 0,
      show: true,
      // 获取下标
      IndexHover: null,
      // titleChild
      content: null,
      boxShow: false,
      index: null,
      a: null,
      CH: 0,
      c: true,
    };
  },
  watch: {},
  created() {
    this.message = sessionStorage.getItem("index");
  },
  mounted() {
    this.navigationList = topList;
  },
  watch: {
    IndexHover(i) {
      this.content = this.navigationList[i].titleChild;
      this.index = this.content.length;
    },
    a(bool) {
      if (bool) {
        this.boxShow = true;
      } else {
        this.boxShow = false;
      }
    },
  },

  computed: {
    IndexShow() {
      return this.index == 0 ? false : true;
    },
  },

  methods: {
    skip(index, item) {
      this.message = index;
      this.$router.push(item.path);
      // this.message = sessionStorage.getItem("index");
      sessionStorage.setItem("index", index);
      sessionStorage.setItem("c", this.c);
    },
    headEnter(i) {
      this.IndexHover = i;
      this.boxShow = true;
      setTimeout(() => {
        this.CH = window.getComputedStyle(this.$refs.H).height;
      }, 1);
    },
    headLeave(i) {
      this.IndexHover = i;
    },
    Enter() {
      this.a = true;
    },
    Leave() {
      this.a = false;
    },
  },
};
</script>

<style scoped lang="less">
.list {
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  position: relative;

  > li {
    padding: 10px 0px;
    cursor: pointer;
    position: relative;
    p {
      line-height: 40px;
    }
    &:hover {
      color: var(--backColor);
      &::after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: var(--backColor);
        position: absolute;
        bottom: unset;
        left: 0;
      }
    }
  }
}

.iconfont {
  font-size: 25px;
  color: var(--backColor);
}

.active {
  color: var(--backColor);
  &::after {
    content: "";
    width: 100%;
    height: 2px;
    background-color: var(--backColor);
    position: absolute;
    bottom: unset;
    left: 0;
  }
}
.listContent {
  width: 800px;
  position: absolute;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 10px 10px 10px;
  box-sizing: border-box;
  z-index: 10;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  background-color: hsla(0, 0%, 100%, 0.85);
  border-radius: 10px 0px 10px 0px;

  div {
    width: 144px;
    height: 54px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: #333;
    margin-left: 8px;
    margin-top: 8px;
    cursor: pointer;

    p {
      margin-left: 6px;
    }
    &:hover {
      background-color: var(--backColor);
      color: white;
      i {
        color: white;
      }
    }
  }
}
/* 加载动画 */
.box {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  li {
    border: 8px solid #f3f3f3;
    border-radius: 50%;
    border-top: 8px solid #2842d8;
    width: 50px;
    height: 50px;
    animation: rotate 2s linear infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>