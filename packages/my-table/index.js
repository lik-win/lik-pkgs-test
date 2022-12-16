import MyTable from "./src/main.vue";

MyTable.install = function (Vue) {
  Vue.component(MyTable.name, MyTable);
};

export default MyTable;
