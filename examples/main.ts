import { createApp } from 'vue'
import App from './App.vue'

// import MyTable from "../packages/my-table"
// import MyInput from "../packages/my-input"
import MyTable from "../packages/my-table/dist/index.js"
import MyInput from "../packages/my-input/dist/index.js"

import './assets/main.css'

createApp(App).use(MyTable).use(MyInput).mount('#app')
