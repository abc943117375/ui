<template>
  <div class="app">
    <mySwitch v-model="testSwitch"></mySwitch>
    <hr />

    <myPopup v-model="testPopup" title="app里面的标题">adsfasdfasd</myPopup>
    <hr />

    <myButton type="primary" @click="testPopup = true">显示</myButton>
    <hr />

    <myInput
      type="textarea"
      style="width:50%"
      v-model="value"
      @change="testChange"
      placeholder="测试占位符"
      :maxlength="100"
      isClear
    ></myInput>
  </div>
</template>

<script>
import myInput from "./components/Input";
import myButton from "./components/Button";
import myPopup from "./components/Popup";
import mySwitch from "./components/Switch";
export default {
  components: {
    myInput,
    myButton,
    myPopup,
    mySwitch
  },
  data() {
    return {
      value: "",
      testLoading: true,
      testPopup: false,
      testSwitch: false
    };
  },
  created() {
    setTimeout(() => {
      this.testLoading = false;
    }, 3000);
  },
  methods: {
    textBtnClick() {
      console.log("点击按钮");
    },
    testChange(e) {
      console.log(e, "----测试change事件,app.vue----");
    }
  }
};
</script>

<style lang="scss">
.app {
  padding: 100px;
}
</style>