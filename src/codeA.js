const Vue = require('vue');
const axios = require('axios')

new Vue({
  el: '#app',
  template: '<div v-on:click="clickEvent">hoge</div>',
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
})