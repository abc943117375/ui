<template>
  <div class="myui-input" :class="disabled && 'disabled'" @click="getFocus">
    <slot name="left-slot"></slot>
    <input
      ref="myInput"
      :class="disabled && 'disabled'"
      :type="type"
      :placeholder="placeholder"
      @input="input"
      :value="value"
      @change="change"
      :style="myStyle"
      :disabled="disabled"
      :maxlength="maxlength"
    />
    <slot name="right-slot"></slot>

    <span
      class="statis text-gray-2"
      v-if="maxlength !==Number.POSITIVE_INFINITY"
    >{{value.length}}/{{maxlength}}</span>
    <span
      class="clear border-circle border text-center text-gray"
      @click="clear"
      v-else-if="isClear&&value"
    >×</span>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, default: "", required: true },
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "" },
    myStyle: { type: String, value: "" },
    isClear: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    maxlength: { type: Number, default: Number.POSITIVE_INFINITY }
  },
  methods: {
    getFocus() {
      this.$refs.myInput.focus();
    },
    clear() {
      this.$emit("input", "");
    },
    input(e) {
      this.$emit("input", e.target.value);
    },
    change(e) {
      this.$emit("change", e.target.value);
    }
  }
};
</script>

<style lang="scss">
.myui-input {
  position: relative;
  display: flex;
  padding: 10px 5% 10px 10px;
  border: 1px solid #eee;
  border-radius: 2px;
  width: 100%;
  .statis,
  .clear {
    position: absolute;
    top: 50%;
    right: 2%;
    transform: translate(0%, -50%);
  }
  .clear {
    width: 20px;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    &:hover {
      border-color: #666;
      color: #666;
    }
  }
  input {
    outline: none;
    border: 0px;
    flex: 1;
  }
}
</style>