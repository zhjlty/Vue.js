var alert_component = {
  template:'<button @click="on_click">夏咩咩</button>',
  methods: {
    on_click: function(){
      alert('Yo.');
    }
  }
};


new Vue({
  el: '#app',
  components:{
    alert: alert_component
  }
});
