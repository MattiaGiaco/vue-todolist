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
        text: 'Comprare regali',
        check: false
      }
    ],
    newItem: {
      text: '',
      check: false
    },
    error: false
  },
  methods:{
    removeItem(index){
      this.todoList.splice(index,1);
    },
    addItem(){
      if (this.newItem.text.length < 3){
        this.error = true;
        setTimeout(()=>{
          this.error = false;
        },3000);
      }else{
        this.todoList.push(this.newItem)
        this.newItem= {
          text: '',
          check: false
        };
      }
    }
    }
});