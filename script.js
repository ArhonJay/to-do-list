document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('form');
  const todoInput = document.getElementById('text-input');
  const todoList = document.getElementById('todo-list');

  const loadTasksFromFile = (tasks) => {
    tasks.forEach(task => {
      addTaskToDOM(task.text, task.completed, task.user);
    });
  };

  const addTaskToDOM = (text, completed = false, user) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const text_span = document.createElement('span');
    const user_span = document.createElement('span');
    text_span.innerText = text;
    user_span.innerText = user;
    div.className = 'task_tag';
    user_span.className = 'user_tag';
    div.appendChild(text_span);
    div.appendChild(user_span);
    li.appendChild(div);    
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