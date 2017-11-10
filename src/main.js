// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.j1 }} {{ todo.j2 }}</li>'
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
