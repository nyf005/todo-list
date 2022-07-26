import clock from "../assets/icons/clock.svg";
import create from "../assets/icons/create.svg";
import trash from "../assets/icons/trash.svg";

import createProjectButton from "../components/project_button";
import createTaskCard from "../components/task_card";

const DOMTools = () => {
  const projectName = document.querySelector("#project-title h3");
  const tasksDiv = document.getElementById("tasks");
  const taskDetailsDiv = document.getElementById("task-details");
  const taskItemsDiv = document.getElementById("task-items");

  const deleteTaskBtn = document.getElementById("deleteTaskBtn");
  const addNoteBtn = document.getElementById("addNoteBtn");
  const addChecklistItemBtn = document.getElementById("addChecklistItemBtn");

  const addProjectButton = (project) => {
    createProjectButton(project);
  };

  const addTaskCard = (task) => {
    createTaskCard(task);
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
