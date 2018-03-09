// Vue.component('like',{
//   template:'<button :class={liked:liked} @click="toggle_like()">👍{{like_count}}</button>',
//   data: function(){
//     return {
//       like_count:10,
//       liked:false,
//     }
//   },
//
//   methods:{
//     toggle_like:function(){
//       if(!this.liked){
//         this.like_count++;
//       }
//       else{
//         this.like_count--;
//       }
//         this.liked = !this.liked;
//     }
//   }
// })
//
// new Vue({
//   el: '#app',
// })


var liked_component = {
  template:'<button :class={liked:liked} @click="toogle_like">👍{{like_count}}</button>',
  data:function(){
    return {
      like_count:9,
      liked:false
    }
  },

  methods:{
    toogle_like:function(){
      if(!this.liked){
        this.like_count++;
      }
      else{
        this.like_count--;
      }
      this.liked = !this.liked;
    }
  }
}
new Vue({
  el:'#app',
  components:{
    like:liked_component
  }
})
