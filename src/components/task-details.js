import clock from "../assets/icons/clock.svg";

export default function createTaskDetails(task) {
  const checkmark = document.createElement("div");
  checkmark.setAttribute("id", "checkmark");

  const detailsStatusCheckbox = document.createElement("input");
  detailsStatusCheckbox.setAttribute("type", "checkbox");
  detailsStatusCheckbox.setAttribute("id", "task-status");

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

  return { checkmark, taskTitle, taskDescription, taskItems };
}
