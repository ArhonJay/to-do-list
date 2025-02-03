document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('form');
  const todoInput = document.getElementById('text-input');
  const todoList = document.getElementById('todo-list');

  const loadTasksFromFile = (tasks) => {
    tasks.forEach(task => {
      addTaskToDOM(task.text, task.completed);
    });
  };

  const addTaskToDOM = (text, completed = false) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = text;
    span.contentEditable = true;
    li.appendChild(span);
    if (completed) {
      li.classList.add('completed');
      const completeText = document.createElement('span');
      completeText.innerText = 'Complete';
      completeText.style.color = 'green';
      li.appendChild(completeText);
    } else {
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', () => {
        li.remove();
      });
      li.appendChild(deleteButton);
    }
  
    todoList.appendChild(li);
  };

  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskText = todoInput.value.trim();
    if (taskText !== '') {
      addTaskToDOM(taskText);
      todoInput.value = '';
    }
  });

  fetch('task.json')
    .then(response => response.json())
    .then(data => loadTasksFromFile(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));
});