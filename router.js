import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index';
import Home from '~/pages/home/index';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Index,
      },
      {
        path: '/home',
        component: Home,
      },
    ]
  });
};
