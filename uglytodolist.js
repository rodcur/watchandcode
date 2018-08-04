var todoList = {
  todos: ["item1", "item2", "item3"],
  showTodos: function() {
    console.log("My todo list: " + this.todos);
  },
  newTodo: function(todo) {
    todoList.todos.push(todo);
    this.showTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.showTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    showTodos();
  }
};
