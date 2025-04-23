import { createApp } from 'vue'
import './styles/global.less'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import GlobalComponents from './plugins/global-components'


const app = createApp(App)
app.use(createPinia())    
app.use(GlobalComponents) // Register globally
app.mount('#app')