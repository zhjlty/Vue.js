Vue.component('like',{
  template:'<button @click="toggle_like()">👍{{like_count}}</button>',
  data: function(){
    return {
      like_count:10,
    }
  },

  methods:{
    toggle_like:function(){
      this.like_count++;
    }
  }
})

new Vue({
  el: '#app',
})
