import { createApp } from 'vue'
import './styles/global.less'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import GlobalComponents from './plugins/global-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlassPlus, faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons'



library.add(faMagnifyingGlassPlus, faMagnifyingGlassMinus)

const app = createApp(App)
app.use(createPinia())    
app.use(GlobalComponents) // Register globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')