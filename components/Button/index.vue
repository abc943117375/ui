<template>
  <div class="myui-button">
    <div
      class="btn text-center"
      :style="{cursor:(!loading && !disabled) && 'pointer',color:type ? '#fff' : '#555'}"
      :class="`${buttonBackground} ${buttonSize} ${disabled && 'btn-disabled disabled'} ${round && 'btn-circle'}`"
      @click="btnClick"
    >
      <!-- <span class="loading" v-if="loading">○</span> -->
      <div v-if="loading" class="loading3">
        <div class="circle circle1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="circle circle2">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="circle circle3">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 类型
    type: { type: String, default: "" },
    // 尺寸
    size: { type: String, default: "default" },
    // 是否禁用
    disabled: { type: Boolean, default: false },
    // 是否显示loading
    loading: { type: Boolean, default: false },
    // 是否显示圆角按钮
    round: { type: Boolean, default: false }
  },
  data() {
    return {};
  },
  computed: {
    buttonSize() {
      return `btn-${this.size}`;
    },
    buttonBackground() {
      const { type } = this;
      return `btn-${type}`;
    }
  },
  methods: {
    btnClick() {
      if (this.loading || this.disabled) {
        return;
      }
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.myui-button {
  // loading效果
  .loading3 {
    width: 10px;
    height: 10px;
    margin-right: 10px;
    position: relative;
    display: inline-block;
  }
  .circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .circle span {
    width: 3px;
    height: 3px;
    display: inline-block;
    background: #eee;
    border-radius: 100%;
    position: absolute;
    -webkit-animation: mycircle 1.2s infinite ease-in-out;
    animation: mycircle 1.2s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .circle2 {
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
  }
  .circle3 {
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
  }
  .circle > span:nth-child(1) {
    top: 0;
    left: 0;
  }
  .circle > span:nth-child(2) {
    top: 0;
    right: 0;
  }
  .circle > span:nth-child(3) {
    right: 0;
    bottom: 0;
  }
  .circle > span:nth-child(4) {
    left: 0;
    bottom: 0;
  }
  .circle2 > span:nth-child(1) {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  .circle3 > span:nth-child(1) {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }
  .circle1 > span:nth-child(2) {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  .circle2 > span:nth-child(2) {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
  .circle3 > span:nth-child(2) {
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
  }
  .circle1 > span:nth-child(3) {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
  }
  .circle2 > span:nth-child(3) {
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
  }
  .circle3 > span:nth-child(3) {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
  }
  .circle1 > span:nth-child(4) {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
  }
  .circle2 > span:nth-child(4) {
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s;
  }
  .circle3 > span:nth-child(4) {
    -webkit-animation-delay: -0.1s;
    animation-delay: -0.1s;
  }
  @-webkit-keyframes mycircle {
    0% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
    80% {
      transform: scale(0);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes mycircle {
    0% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
    80% {
      transform: scale(0);
    }
    100% {
      transform: scale(0);
    }
  }
}
</style>