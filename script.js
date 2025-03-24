const todoList = [{

}];


function renderTodoList() {

  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;

    const html = `
      <p>"${name}" ${dueDate}
        <button
        class="js-delete-todo-button" >Delete
        </button>
      </p>
    `;
    todoListHTML += html
  })

  console.log(todoListHTML)

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        console.log(index);
        todoList.splice(index,1);
        renderTodoList();
      })
    })
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.ariaValueMax;

  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value

  todoList.push({
    name,
    dueDate,
  });

  console.log(todoList)

  inputElement.value = '';
  renderTodoList();
}
