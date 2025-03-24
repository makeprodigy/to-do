const todoList = [];


function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;

    const html = `
      <li>
        "${name}" - ${dueDate}
        <button class="js-delete-todo-button" data-index="${index}">Delete</button>
      </li>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = `<ul>${todoListHTML}</ul>`;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton) => {
      deleteButton.addEventListener('click', (event) => {
        const index = event.target.dataset.index;
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

  function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value.trim(); // Ensure it's not empty
  
    const dateInputElement = document.querySelector('.js-date-input');
    const dueDate = dateInputElement.value.trim();
  
    if (!name) {
      alert("Please enter a valid todo name.");
      return;
    }
  
    if (!dueDate) {
      alert("Please select a valid due date.");
      return;
    }
  
    todoList.push({ name, dueDate });
  
    inputElement.value = '';  // Clear input
    dateInputElement.value = '';
  
    renderTodoList();
  }