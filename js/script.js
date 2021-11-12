const app = new Vue({

  el: '#app',
  data:{
    todoList:[
      {
        text: 'Ripassare HTML/CSS',
        check: false
      },
      {
        text: 'Studiare Vue',
        check: false
      },
      {
        text: 'Fare la spesa',
        check: true
      },
      {
        text: 'Comprare pane',
        check: false
      }
    ],
    stringTodo: {
      text: '',
      check: false
    }
  },
  methods:{
    removeItem(index){
      this.todoList.splice(index,1);
    }
    }
});