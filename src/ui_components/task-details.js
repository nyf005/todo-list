import clock from "../assets/icons/clock.svg";
import trash from "../assets/icons/trash.svg";
import pen from "../assets/icons/pen.svg";
import checkboxChecked from "../assets/icons/checkbox-checked.svg";

export default function createTaskDetails(task) {
  const checkmark = document.createElement("div");
  checkmark.setAttribute("id", "checkmark");

  const detailsStatusCheckbox = document.createElement("input");
  detailsStatusCheckbox.setAttribute("type", "checkbox");
  detailsStatusCheckbox.setAttribute("id", "task-status");
  detailsStatusCheckbox.setAttribute("disabled", "disabled");

  const detailsStatusLabel = document.createElement("label");
  detailsStatusLabel.setAttribute("for", "task-status");

  detailsStatusCheckbox.checked = task.completed;

  checkmark.append(detailsStatusCheckbox, detailsStatusLabel);

  const taskTitle = document.createElement("div");
  taskTitle.setAttribute("id", "task-title");

  const h2 = document.createElement("h2");
  h2.textContent = task.title;

  const subtitle = document.createElement("div");
  subtitle.classList.add("subtitle");

  const detailsDueDate = document.createElement("div");
  detailsDueDate.setAttribute("id", "details-due-date");

  const clockIcon = document.createElement("img");
  clockIcon.src = clock;
  clockIcon.setAttribute("alt", "clock");

  const date = document.createElement("p");
  date.textContent = task.dueDate;

  detailsDueDate.append(clockIcon, date);

  const priority = document.createElement("p");
  priority.setAttribute("id", "priority");
  priority.textContent = task.priority;

  subtitle.append(detailsDueDate, priority);

  taskTitle.append(h2, subtitle);

  const taskDescription = document.createElement("div");
  taskDescription.setAttribute("id", "task-description");
  taskDescription.textContent = task.description;

  const taskItems = document.createElement("div");
  taskItems.setAttribute("id", "task-items");

  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.setAttribute("id", "deleteTaskBtn");
  deleteTaskBtn.setAttribute("data-name", task.title);
  deleteTaskBtn.classList.add("actionBtn");

  const deleteIcon = document.createElement("img");
  deleteIcon.src = trash;
  deleteIcon.setAttribute("alt", "trash");

  deleteTaskBtn.appendChild(deleteIcon);

  const editTaskBtn = document.createElement("button");
  editTaskBtn.setAttribute("id", "editTaskBtn");
  editTaskBtn.setAttribute("data-name", task.title);
  editTaskBtn.classList.add("actionBtn");

  const editIcon = document.createElement("img");
  editIcon.src = pen;
  editIcon.setAttribute("alt", "pen");

  editTaskBtn.appendChild(editIcon);

  const addItemBtn = document.createElement("button");
  addItemBtn.setAttribute("id", "addItemBtn");
  addItemBtn.setAttribute("data-name", task.title);
  addItemBtn.classList.add("actionBtn");

  const addItemIcon = document.createElement("img");
  addItemIcon.src = checkboxChecked;
  addItemIcon.setAttribute("alt", "checkbox-checked");

  addItemBtn.appendChild(addItemIcon);

  return {
    checkmark,
    taskTitle,
    taskDescription,
    taskItems,
    deleteTaskBtn,
    editTaskBtn,
    addItemBtn,
  };
}
