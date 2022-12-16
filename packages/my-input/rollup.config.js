import vue from "rollup-plugin-vue";

export default {
  input: "./index.js",
  output: [
    {
      file: "dist/index.js",
      format: "es",
    },
  ],
  plugins: [vue()],
};
