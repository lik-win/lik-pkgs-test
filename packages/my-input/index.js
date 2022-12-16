import MyInput from "./src/main.vue";

MyInput.install = function (Vue) {
  Vue.component(MyInput.name, MyInput);
};

export default MyInput;
