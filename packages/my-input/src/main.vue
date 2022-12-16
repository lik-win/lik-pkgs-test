<template>
  <h2>表单组件</h2>
  <input type="text" placeholder="我是组件库里的input哦！" />
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "my-input",
  mounted() {
    console.log("my-input 初始化");
  },
});
</script>
