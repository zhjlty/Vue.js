var app = new Vue({
  el: '#app',
  data: {
    math:90,
    english:80,
    chinese:60
},

  computed: {
    sum: function(){
      return this.math+this.english+this.chinese;
    },
    average: function(){
      return Math.round(this.sum/3);
    }
  }
})
