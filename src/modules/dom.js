import clock from "../assets/icons/clock.svg";
import create from "../assets/icons/create.svg";
import trash from "../assets/icons/trash.svg";

const DOMTools = () => {
  const projectsDiv = document.getElementById("projects");
  const projectName = document.querySelector("#project-title h3");
  const tasksDiv = document.getElementById("tasks");
  const taskDetailsDiv = document.getElementById("task-details");
  const taskItemsDiv = document.getElementById("task-items");

  const deleteTaskBtn = document.getElementById("deleteTaskBtn");
  const addNoteBtn = document.getElementById("addNoteBtn");
  const addChecklistItemBtn = document.getElementById("addChecklistItemBtn");

  const createProjectButton = (project) => {
    const button = document.createElement("button");
    button.className = "project-name";

    const dot = document.createElement("div");
    dot.className = "dot";

    const span = document.createElement("span");
    span.textContent = project.name;

    button.append(dot, span);

    projectsDiv.append(button);
  };

  const createTaskCard = (task) => {
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

    tasksDiv.appendChild(card);
  };

  const createTaskDetailsHeader = (task) => {
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

    taskDetailsDiv.append(checkmark, taskTitle);
  };

  const createTaskNoteItem = (taskItem) => {
    const item = document.createElement("div");
    item.className = "item";

    const content = document.createElement("p");
    content.textContent = taskItem.value;

    const itemActions = document.createElement("div");
    itemActions.className = "item-actions";

    const editBtn = document.createElement("button");
    editBtn.className = "actionBtn";
    const createIcon = document.createElement("img");
    createIcon.setAttribute("src", create);
    editBtn.appendChild(createIcon);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "actionBtn";
    const trashIcon = document.createElement("img");
    trashIcon.setAttribute("src", trash);
    deleteBtn.appendChild(trashIcon);

    itemActions.append(editBtn, deleteBtn);

    item.append(content, itemActions);

    taskItemsDiv.appendChild(item);

    taskDetailsDiv.appendChild(taskItemsDiv);
  };

  // const createTaskCheckItem = (content) => {};

  const setTaskActionBtn = (index) => {
    deleteTaskBtn.setAttribute("data-index", index);
    addNoteBtn.setAttribute("data-index", index);
    addChecklistItemBtn.setAttribute("data-index", index);
  };

  const setTasksTitle = (project) => {
    projectName.textContent = `${project.name} Tasks`;
  };

  let selectedTaskCard = null;
  const setActiveCard = (selectedCard) => {
    getTaskCards().forEach((taskCard) => {
      if (taskCard.classList.contains("active")) {
        taskCard.classList.remove("active");
      }
      selectedCard.classList.add("active");

      selectedTaskCard = selectedCard;
    });

    taskDetailsDiv.innerHTML = "";
  };

  const getTaskCards = () => {
    return document.querySelectorAll(".task");
  };

  return {
    createProjectButton,
    setTasksTitle,
    createTaskCard,
    createTaskDetailsHeader,
    createTaskNoteItem,
    setActiveCard,
    getTaskCards,
    setTaskActionBtn,
  };
};

export default DOMTools;
