<template>
  <div class="myui-popup" v-if="value">
    <div class="popup-body" :style="{width:width}">
      <header class="header d-flex jc-between">
        <span class="title">{{title}}</span>
        <span class="close" @click="close">×</span>
      </header>
      <div class="pt-5">
        <slot></slot>
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  props: {
    // 是否显示
    value: { type: Boolean, default: false },
    // 标题
    title: { type: String, default: "提示" },
    // 宽度
    width: { type: String, default: "50%" }
  },
  methods: {
    close() {
      this.$emit("input", false);
    }
  }
};
</script>

<style lang="scss" scoped>
.myui-popup {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 10;
  transition: all 0.3s linear;
  .popup-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 30px;
    border-radius: 6px;
    .header {
      .title {
        font-size: 24px;
      }
      .close {
        font-size: 24px;
        color: #aaa;
        cursor: pointer;
        &:hover {
          color: #47a1f7;
        }
      }
    }
    .info {
      padding: 30px 0;
      color: #666;
    }
  }
}
</style>