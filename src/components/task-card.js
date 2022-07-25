import "../css/task.css";

export default function createTaskCard(task) {
  const card = document.createElement("div");
  card.className = "task";

  const checkbox = document.createElement("div");
  checkbox.className = "checkbox";

  const checkboxInput = document.createElement("input");
  checkboxInput.setAttribute("type", "checkbox");
  checkboxInput.setAttribute("id", task.title);
  checkboxInput.checked = task.completed;

  const checkboxLabel = document.createElement("label");
  checkboxLabel.setAttribute("for", task.title);

  checkbox.append(checkboxInput, checkboxLabel);

  const taskInfos = document.createElement("div");
  taskInfos.className = "task-infos";

  const h4 = document.createElement("h4");
  h4.textContent = task.title;

  const additionalInfos = document.createElement("div");
  additionalInfos.className = "additional";

  const dueDate = document.createElement("p");
  dueDate.className = "task-due-date";
  dueDate.textContent = task.dueDate;

  const priority = document.createElement("p");
  priority.className = "priority";
  priority.textContent = task.priority;

  additionalInfos.append(dueDate, priority);
  taskInfos.append(h4, additionalInfos);

  card.append(checkbox, taskInfos);

  return card;
}
