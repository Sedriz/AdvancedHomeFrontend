import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateAction from "./components/creator/CreateAction";
import CreateDataType from "./components/creator/CreateDataType";
import CreateDevice from "./components/creator/CreateDevice";
import CreateLocation from "./components/creator/CreateLocation";
import CreateType from "./components/creator/CreateType";
import Creator from "./views/Creator";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  // eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path:'/creator/:isUpdate',
      name: 'Creator',
      props: true,
      component: Creator,
      children: [
        {
          path: 'action/:id?',
          name: 'Action',
          props: true,
          component: CreateAction,
        },
        {
          path: 'datatype/:id?',
          name: 'DataType',
          props: true,
          component: CreateDataType,
        },
        {
          path: 'device/:id?',
          name: 'Device',
          props: true,
          component: CreateDevice,
        },
        {
          path: 'location/:id?',
          name: 'Location',
          props: true,
          component: CreateLocation,
        },
        {
          path: 'type/:id?',
          name: 'Type',
          props: true,
          component: CreateType,
        },
      ]
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})

export default router
