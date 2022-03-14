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
      path:'/creator/:isUpdate/:id',
      name: 'Creator',
      props: true,
      component: Creator,
      children: [
        {
          path: 'action',
          name: 'Action',
          props: true,
          component: CreateAction,
        },
        {
          path: 'datatype',
          name: 'DataType',
          props: true,
          component: CreateDataType,
        },
        {
          path: 'device',
          name: 'Device',
          props: true,
          component: CreateDevice,
        },
        {
          path: 'location',
          name: 'Location',
          props: true,
          component: CreateLocation,
        },
        {
          path: 'type',
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
