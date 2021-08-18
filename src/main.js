import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyBDqdIqX37ZkP_Vx89NY_QF2qhLF8UkKlo",
  authDomain: "auth-tutorial-68f3e.firebaseapp.com",
  databaseURL: "YOUR_DOMAIN.firebaseio.com",
  projectId: "auth-tutorial-68f3e",
  storageBucket: "auth-tutorial-68f3e.appspot.com",
  messagingSenderId: "111933670259",
};
firebase.initializeApp(config);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
