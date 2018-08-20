const todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your todolist is empty.");
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
      console.log(this.todos[i].todoText);
      if (this.todos[i].completed === false) {
       console.log('Incomplete');
     } else {
       console.log('Complete!'); }
    }
    }
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
