import Vue from 'vue'
import Router from 'vue-router'

import NuxtLogo from '~/components/NuxtLogo';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: NuxtLogo,
      }
    ]
  });
};
