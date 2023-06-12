let tasks = [];
tasks = JSON.parse(localStorage.getItem("tasks"));
const addTask = () => {
  let name = document.querySelector("#task-name").value;
  let desc = document.querySelector("#task-desc").value;
  if (localStorage.getItem("tasks") == null) {
    tasks = [];
    tasks.push([name, desc]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.push([name, desc]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  updateTasks();
};
const remove = (index) => {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  updateTasks();
};
const updateTasks = () => {
  tasksContainer = document.getElementById("tasks-Container");
  tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks != null) {
    str = "";
    tasks.forEach((element, index) => {
      str += `<div class="card mb-4 m-5" style="width: 18rem">
      <div card-header>
     Task no ${index + 1}
      </div>
        <div class="card-body">
          <h5 class="card-title">${element[0]}</h5>
        
          <p class="card-text">
           ${element[1]}
          </p>
          <button onclick=remove(${index}) class="btn btn-danger">remove</button>
    
        </div>
      </div>`;
    });
    tasksContainer.innerHTML = str;
  }
};
updateTasks();
