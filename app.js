// Grab the elements we need from the page.
const form = document.getElementById("new-task");
const input = document.getElementById("task-input");
const list = document.getElementById("tasks");

// Load previously saved tasks out of the browser's own storage.
let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

function render() {
  list.innerHTML = "";
  for (const task of tasks) {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();          // stop the page reloading
  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  render();
});

render();