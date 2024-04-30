const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const todos = JSON.parse(localStorage.getItem('todos')) || [];
let editText= "";

todoForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log('ADD');
  addTodo();
});

window.addEventListener('load', () => {
    renderTodos();
  });

function addTodo() {
   
    var todoText = todoInput.value.trim();
    if (todoText === '') {
        alert("You Must Enter Something")
    } else{
        todos.push(todoText)
        console.log("jjjj"+todos)


      todoInput.value = '';
     saveTodos();
      renderTodos();
    }
   
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}
   
  
function renderTodos() {
    todoList.innerHTML = '';
   
    
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = `todo-${Date.now()}`;  
      const label = document.createElement('label');
      label.setAttribute('for', `todo-${Date.now()}`);
      label.textContent = todo;
      const deleteButton = document.createElement('button');
      deleteButton.className="del-btn";
      deleteButton.textContent = "delete";


      const editButton = document.createElement('button');
      editButton.className = "edit-btn";
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => {
          const inputField = document.createElement('input');
          inputField.type = 'text';
          inputField.value = label.textContent;
          inputField.className = 'edit-input';
          const saveButton = document.createElement('button');
          saveButton.className = 'save-btn';
          saveButton.textContent = 'Save';
          saveButton.addEventListener('click', () => {
              const editedText = inputField.value.trim();
              if (editedText != '') {
                  todos[index] = editedText;
                  saveTodos();
                  renderTodos();
              } else {
                  alert("You must enter something.");
              }
          });
          label.replaceWith(inputField);
          editButton.style.display = 'none';
          li.insertBefore(saveButton, deleteButton);
          inputField.focus();
      });

      input.addEventListener('click', () => {
          if (input.checked) {
              label.style.textDecoration = 'line-through';
          } else {
              label.style.textDecoration = '';
          }
      });


      deleteButton.addEventListener('click', () => {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
      });
      li.appendChild(input);
      li.appendChild(label);
      li.appendChild(editButton);
      li.appendChild(deleteButton);
      todoList.appendChild(li);
     
    });
  }