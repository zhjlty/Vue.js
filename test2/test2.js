var alert_component = {
  template:'<button @click="on_click">夏咩咩</button>',
  props:['msg'],
  methods: {
    on_click: function(){
      alert(this.msg);
    }
  }
};


new Vue({
  el: '#app',
  components:{
    alert: alert_component
  }
});
