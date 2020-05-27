<template>
  <div class="myui-switch">
    <div class="switch" @click="total" :style="{background:value ? '#60CF68' : '#ED4546'}">
      <div class="slider" :class="value ? 'open' : 'close'"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Boolean, default: false }
  },
  methods: {
    total() {
      this.$emit("input", !this.value);
      this.$emit("change", !this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.myui-switch {
  .switch {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 10px;
    position: relative;
    transition: all 0.3s linear;
    cursor: pointer;
    .slider {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      top: 2px;
      position: absolute;
      background: #fff;
      transition: all 0.3s linear;
      &.open {
        left: 100%;
        transform: translate(-114%);
      }
      &.close {
        left: 2px;
      }
    }
  }
}
</style>