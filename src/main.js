import { createApp } from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import App from './App.vue';
// import router from './router/router.js';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


import HomeSection from './components/pages/homeSection.vue'

import EmployeeMain from './components/Employee/EmployeeMain.vue'
import EmployeeForm from './components/Employee/EmployeeForm.vue'
import EmployeeItem from './components/Employee/EmployeeItem.vue'
import OfficeMain from './components/Office/OfficeMain.vue';

const routes = [
    {
        path: '/Offices', component: OfficeMain,
    },
    {
        path: '/Employees', name: 'Employees', component: EmployeeMain,
    },
    {
        path: '/Employees/create', component: EmployeeForm,
    },
    {
        path: '/Employees/:id', component: EmployeeItem,
    },
    {
        path: '/', component: HomeSection
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const vuetify = createVuetify({
    components,
    directives,
  })


const app = createApp(App);

app.use(router);
app.use(vuetify);

app.mount('#app');

export default {router};