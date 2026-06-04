let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

renderTodo();

function addTodo() {
  let buttonElem1 = document.querySelector(".todo-input");

  let buttonElem2 = document.querySelector(".duedate-input");

  let name = buttonElem1.value;

  let dueDate = buttonElem2.value;

  todoList.push({ name, dueDate });

  saveTodoList();

  buttonElem1.value = "";

  buttonElem2.value = "";

  renderTodo();
}

function renderTodo() {
  let todoHtml = "";

  todoList.forEach(function (todoObject, index) {
    let html = `
      <div class="js-todo-text" >${todoObject.name}</div>
      <div class="js-todo-date">${todoObject.dueDate}</div>
      <button onclick="
        deleteTodoList(${index})
      "class="delete-btn">Delete</button>`;
    todoHtml += html;
  });

  let buttonElem = document.querySelector(".todo-output");
  buttonElem.innerHTML = todoHtml;
}

function saveTodoList() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function deleteTodoList(index) {
  todoList.splice(index, 1);

  renderTodo();

  saveTodoList();
}
