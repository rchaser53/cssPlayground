const Vue = require('vue');
const axios = require('axios')

/* 
  よい例
  通信箇所は通信箇所で別にテストが書ける
*/
const mixin = {
  methods: {
    clickEvent: function() {
      axios('http://localhost:3000/')
          .then((ret) => {
            console.log(ret)
          })
          .catch((err) => {
            console.error(err)
          })
    }
  }
}

new Vue({
  el: '#app',
  template: '<div v-on:click="clickEvent">hoge</div>',
  mixins: [mixin]
});