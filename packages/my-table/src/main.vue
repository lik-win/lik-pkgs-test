<template>
  <h2>表格组件</h2>
  <table border style="border-collapse: collapse">
    <tr>
      <th>000</th>
      <th>000</th>
      <th>000</th>
      <th>000</th>
    </tr>
    <tr>
      <td>111</td>
      <td>111</td>
      <td>111</td>
      <td>111</td>
    </tr>
    <tr>
      <td>222</td>
      <td>222</td>
      <td>222</td>
      <td>222</td>
    </tr>
    <tr>
      <td>333</td>
      <td>333</td>
      <td>333</td>
      <td>333</td>
    </tr>
  </table>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "my-table",
  mounted() {
    console.log("my-table 初始化");
  },
});
</script>
