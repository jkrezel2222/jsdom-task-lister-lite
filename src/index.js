document.addEventListener("DOMContentLoaded", () => {
  
  const createTaskForm = document.getElementById("create-task-form");

  createTaskForm.addEventListener("submit", createNewTask);

});

const createNewTask = event => {

  event.preventDefault();

  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");

  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
