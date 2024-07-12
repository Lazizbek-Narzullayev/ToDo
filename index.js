document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('toDoForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    function addTask(taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;
      const deleteButton = document.createElement('span');
      deleteButton.textContent = ' ❌';
      deleteButton.classList.add('delete');
      deleteButton.addEventListener('click', function() {
        li.remove();
      });
  
      // Taxrirlash funksiyasini qo'shamiz
      const editButton = document.createElement('span');
      editButton.textContent = ' ✏️';
      editButton.classList.add('edit');
      editButton.addEventListener('click', function() {
        const newText = prompt('Vazifani yangilang:', taskText);
        if (newText !== null && newText.trim() !== '') {
          li.textContent = newText.trim();
        }
      });
  
      li.appendChild(deleteButton);
      li.appendChild(editButton); // Taxrirlash tugmasini li elementiga qo'shamiz
      taskList.appendChild(li);
    }
  });
  