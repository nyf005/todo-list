import clock from "../assets/icons/clock.svg";

const taskDetailsHeader = (task) => {
  const checkmark = document.createElement("div");
  checkmark.setAttribute("id", "checkmark");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", `${task.title} copy`);
  checkbox.setAttribute("disabled", "disabled");
  checkbox.checked = task.completed;

  const label = document.createElement("label");
  label.setAttribute("for", `${task.title} copy`);

  checkmark.append(checkbox, label);

  const taskTitle = document.createElement("div");
  taskTitle.setAttribute("id", "task-title");

  const projectTitle = document.createElement("h2");
  projectTitle.textContent = task.title;

  const subtitle = document.createElement("div");
  subtitle.setAttribute("id", "subtitle");

  const dueDateDiv = document.createElement("div");
  dueDateDiv.setAttribute("id", "task-due-date");

  const icon = document.createElement("img");
  icon.setAttribute("src", clock);

  const dueDate = document.createElement("p");
  dueDate.textContent = task.dueDate;

  dueDateDiv.append(icon, dueDate);

  const priority = document.createElement("p");
  priority.textContent = task.priority;

  subtitle.append(dueDateDiv, priority);

  taskTitle.append(projectTitle, subtitle);

  return { checkmark, taskTitle };
};

export default taskDetailsHeader;
