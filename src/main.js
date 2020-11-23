// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDVaCq5tYRdb3GopjaWx6iD1f2puRW8Z6g",
  authDomain: "mylocator-3171d.firebaseapp.com",
  databaseURL: "https://mylocator-3171d.firebaseio.com",
  projectId: "mylocator-3171d",
  storageBucket: "mylocator-3171d.appspot.com",
  messagingSenderId: "446701835056",
  appId: "1:446701835056:web:10c86ea03d46f34a84aef5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
