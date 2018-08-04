let todos = ["item1", "item2", "item3"]; // create todo list

function showTodos() {
  console.log("My todo list: " + todos); // print out todolist
}

function addNewTodo(todo) {          // adds a new item to the list
  todos.push(todo);
  showTodos();                      // then prints the list out
}
function changeTodo(position, newValue) { // adds two parameters for postion and value
  todos[position] = newValue;             //changes the value
  showTodos();
}
function deleteTodo (position) {
  todos.splice(position, 1,);
  showTodos();
}
