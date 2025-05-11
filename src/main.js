// import './assets/main.css'

import {createApp} from 'vue'
// import { createPinia } from 'pinia'
import AppOne from './AppOne.vue'
import AppTwo from './AppTwo.vue'
import AppThree from './AppThree.vue'

const app = createApp(AppThree)

// app.use(createPinia())

app.mount('#app')
