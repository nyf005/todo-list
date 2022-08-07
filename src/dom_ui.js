import Controller from "./index";
import ProjectButtonComponent from "./ui_components/project_name_button";
import TaskCardComponent from "./ui_components/task_card";
import TaskItemComponent from "./ui_components/task-item";
import TaskDetailsComponent from "./ui_components/task-details";
import ProjectFormComponent from "./ui_components/project_form";
import NewProjectBtnComponent from "./ui_components/new_project_button";
import TaskFormComponent from "./ui_components/task_form";
import MoveTaskFormComponent from "./ui_components/move_task_form";
import TaskItemFormComponent from "./ui_components/item_form";

import plus from "./assets/icons/plus.svg";

const DomUI = (() => {
  const projectsDiv = document.getElementById("projects");
  const projectTitle = document.getElementById("project-title");
  const projectName = document.querySelector("#project-title h3");

  const taskCardsDiv = document.getElementById("task-cards");

  const addTaskBtn = document.getElementById("addTaskBtn");
  const addIcon = document.createElement("img");
  addIcon.src = plus;
  addTaskBtn.appendChild(addIcon);

  const formModal = document.getElementById("form-modal");

  const taskActionsDiv = document.getElementById("task-actions");
  const taskDetailsDiv = document.getElementById("task-details");

  // PROJECT
  const createAddProjectButton = () => {
    projectsDiv.parentNode.insertBefore(NewProjectBtnComponent(), projectsDiv);
    const addProjectBtn = document.getElementById("addProject");

    addProjectBtn.addEventListener("click", () => {
      _displayProjectForm();
    });
  };

  const createProjectButton = (project) => {
    // We create a project button
    let projectBtn = ProjectButtonComponent(project.getProjectName());

    // Append the project button to projects div
    projectsDiv.append(projectBtn);

    // Add click event to individual projects
    projectBtn.addEventListener("click", () => {
      setActiveProject(projectBtn);
      showTaskCards(project);
    });

    return projectBtn;
  };

  const setActiveProject = (selectedProject) => {
    getProjectsBtns().forEach((projectBtn) => {
      projectBtn.classList.remove("active");
    });

    selectedProject.classList.add("active");
    _setTasksHeader(selectedProject);

    taskCardsDiv.innerHTML = "";
    taskActionsDiv.innerHTML = "";
    taskDetailsDiv.innerHTML = "";
  };

  const _displayProjectForm = () => {
    const addProjectBtn = document.getElementById("addProject");
    const projectForm = ProjectFormComponent();
    addProjectBtn.parentNode.replaceChild(projectForm, addProjectBtn);

    addTaskBtn.disabled = true;

    projectForm.addEventListener("submit", (e) => {
      const projectEntry = e.target.elements[0].value;
      Controller.submitProjectForm(projectEntry);
      _hideProjectForm();
    });

    const cancelBtn = document.getElementById("cancelBtn");
    cancelBtn.addEventListener("click", _hideProjectForm);
  };

  const _hideProjectForm = () => {
    const projectForm = document.getElementById("project-form");
    projectForm.parentNode.replaceChild(NewProjectBtnComponent(), projectForm);

    const addProjectBtn = document.getElementById("addProject");
    addProjectBtn.addEventListener("click", _displayProjectForm);

    addTaskBtn.disabled = false;
  };

  const setProjectsBtns = (projectsList) => {
    // Add click event to default projectBtns
    getProjectsBtns().forEach((projectBtn) => {
      projectBtn.addEventListener("click", () => {
        setActiveProject(projectBtn);

        const project = projectsList.getProject(
          projectBtn.getAttribute("data-name")
        );

        if (project) {
          // Load tasks related to clicked project
          showTaskCards(project);
        }
      });
    });
  };

  const showTaskCards = (project) => {
    // Get all the task related to project

    const tasks = project.getTasks();
    // Empty div only if we are current in the same project
    if (
      project.getProjectName() == getCurrentProject().getAttribute("data-name")
    ) {
      taskCardsDiv.innerHTML = "";
    }
    if (tasks) {
      tasks.forEach((task) => {
        const taskCard = TaskCardComponent(task.getTaskInfos());

        // Add click event to individual tasks
        taskCard.addEventListener("click", () => {
          taskActionsDiv.innerHTML = "";
          taskDetailsDiv.innerHTML = "";

          _setActiveTask(taskCard);
          showTaskDetails(task.getTaskInfos());
          task.getTaskInfos().items.forEach((item) => {
            createTaskItem(item.getTaskItemInfos());
          });
        });

        // Add click event to corresponding checkbox
        const checkboxInput = taskCard.childNodes[0].childNodes[0];
        checkboxInput.addEventListener("click", (e) => {
          Controller.updateTaskStatus(e.target.getAttribute("id"));
          if (checkboxInput.checked) {
            taskCard.classList.add("checked");
          } else {
            taskCard.classList.remove("checked");
          }
        });

        if (checkboxInput.checked) {
          taskCard.classList.add("checked");
        } else {
          taskCard.classList.remove("checked");
        }

        // Append only if we are current in the same project
        if (
          project.getProjectName() ==
          getCurrentProject().getAttribute("data-name")
        ) {
          taskCardsDiv.appendChild(taskCard);
        }
      });
    }
  };

  const getCurrentProject = () => {
    return document.getElementsByClassName("project-name active")[0];
  };

  // TASKS

  const _setTasksHeader = (projectBtn) => {
    const name = projectBtn.getAttribute("data-name");
    projectName.textContent = `${name} Tasks`;
    if (projectBtn.firstChild.style) {
      projectTitle.style.borderLeftColor =
        projectBtn.firstChild.style.borderColor;
    } else {
      projectTitle.style.borderLeftColor = "#fff";
    }

    const addTBtn = document.createElement("button");
    addTBtn.add;
  };

  const _setActiveTask = (selectedTask) => {
    _getTaskCards().forEach((taskCard) => {
      taskCard.classList.remove("active");
    });

    selectedTask.classList.add("active");
  };

  const getCurrentTask = () => {
    return document.getElementsByClassName("task active")[0];
  };

  const displayTaskForm = (projectsList) => {
    addTaskBtn.addEventListener("click", () => {
      // Get the current project
      const currentProject = getCurrentProject().getAttribute("data-name");

      // Create the task form
      const taskForm = TaskFormComponent(projectsList, currentProject);
      formModal.appendChild(taskForm);
      formModal.style.display = "block";

      taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        Controller.submitTaskForm(e.target.elements);
        _hideTaskForm();
      });

      const cancelBtn = document.querySelector(
        "#task-form-actions button:last-child"
      );

      cancelBtn.addEventListener("click", _hideTaskForm);
      formModal.addEventListener("click", (e) => {
        if (e.target.id == "form-modal") {
          _hideTaskForm();
        }
      });
    });
  };

  const _hideTaskForm = () => {
    formModal.style.display = "none";
    formModal.innerHTML = "";
  };

  // TASK DETAILS

  const showTaskDetails = (task) => {
    const {
      checkmark,
      taskTitle,
      taskDescription,
      taskItems,
      deleteTaskBtn,
      moveTaskBtn,
      editTaskBtn,
      addItemBtn,
    } = TaskDetailsComponent(task);

    editTaskBtn.addEventListener("click", () => {
      const mode = "edit";
      // Get the current project
      const currentProject = getCurrentProject().getAttribute("data-name");

      // Create the task form
      const taskForm = TaskFormComponent(
        Controller.getProjectsList(),
        currentProject,
        task
      );
      formModal.appendChild(taskForm);
      formModal.style.display = "block";

      taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        taskActionsDiv.innerHTML = "";
        taskDetailsDiv.innerHTML = "";

        Controller.submitTaskForm(e.target.elements, mode);

        const taskCard = getTaskCard(task);
        taskCard.classList.add("active");

        _hideTaskForm();
      });

      const cancelBtn = document.querySelector(
        "#task-form-actions button:last-child"
      );

      cancelBtn.addEventListener("click", _hideTaskForm);
      formModal.addEventListener("click", (e) => {
        if (e.target.id == "form-modal") {
          _hideTaskForm();
        }
      });
    });

    moveTaskBtn.addEventListener("click", () => {
      // Get the current project
      const currentProjectName = getCurrentProject().getAttribute("data-name");
      const taskName = getCurrentTask().getAttribute("data-title");

      // Create the move form
      const moveForm = MoveTaskFormComponent(
        Controller.getProjectsList(),
        currentProjectName
      );
      formModal.appendChild(moveForm);
      formModal.style.display = "block";

      moveForm.addEventListener("submit", (e) => {
        e.preventDefault();

        Controller.submitMoveTaskForm(
          e.target.elements[0].value,
          currentProjectName,
          taskName
        );
        _hideTaskForm();
        taskActionsDiv.innerHTML = "";
        taskDetailsDiv.innerHTML = "";
      });

      const cancelBtn = document.querySelector(
        "#task-form-actions button:last-child"
      );

      cancelBtn.addEventListener("click", _hideTaskForm);
      formModal.addEventListener("click", (e) => {
        if (e.target.id == "form-modal") {
          _hideTaskForm();
        }
      });
    });

    // Add event listener to delete task btn
    deleteTaskBtn.addEventListener("click", (e) => {
      // We use the attribute of the deletetaskBtn in the Controller deleteTask function
      Controller.deleteTask(e.currentTarget.getAttribute("data-title"));

      // Clear the details section as the task no longer exists
      taskActionsDiv.innerHTML = "";
      taskDetailsDiv.innerHTML = "";
    });

    addItemBtn.addEventListener("click", (e) => {
      const addProjectBtn = document.getElementById("addProject");

      addProjectBtn.disabled = true;
      addTaskBtn.disabled = true;
      addItemBtn.disabled = true;
      displayTaskItemForm();
    });

    taskActionsDiv.append(editTaskBtn, moveTaskBtn, deleteTaskBtn, addItemBtn);
    taskDetailsDiv.append(checkmark, taskTitle, taskDescription, taskItems);
  };

  const displayTaskItemForm = () => {
    const taskItemsDiv = document.getElementById("task-items");
    const addTaskItemForm = TaskItemFormComponent();
    // Get the current task;
    const taskTitle = getCurrentTask().getAttribute("data-title");

    taskItemsDiv.insertBefore(addTaskItemForm, taskItemsDiv.firstChild);

    addTaskItemForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskItemEntry = e.target.elements[0].value;
      Controller.submitTaskItemForm(taskTitle, taskItemEntry);
      _hideTaskItemForm();
    });

    const cancelBtn = document.getElementById("cancelBtn");
    cancelBtn.addEventListener("click", _hideTaskItemForm);
  };

  const _hideTaskItemForm = () => {
    const addProjectBtn = document.getElementById("addProject");
    const taskItemsDiv = document.getElementById("task-items");
    const taskItemForm = document.getElementById("task-item-form");

    addProjectBtn.disabled = false;
    addTaskBtn.disabled = false;
    addItemBtn.disabled = false;

    taskItemsDiv.removeChild(taskItemForm);
  };

  const createTaskItem = (taskItem) => {
    const taskItemsDiv = document.getElementById("task-items");
    const item = TaskItemComponent(taskItem);
    const currentTaskTitle = getCurrentTask().getAttribute("data-title");

    const itemCheckbox = item.childNodes[0].childNodes[0];
    itemCheckbox.addEventListener("click", () => {
      Controller.updateTaskItemStatus(
        currentTaskTitle,
        itemCheckbox.getAttribute("id")
      );
    });

    const deleteItemBtn = item.childNodes[1];
    deleteItemBtn.addEventListener("click", () => {
      Controller.deleteTaskItem(
        currentTaskTitle,
        deleteItemBtn.getAttribute("id")
      );
      taskItemsDiv.removeChild(item);
    });

    taskItemsDiv.appendChild(item);
  };

  const _getTaskCards = () => {
    return document.querySelectorAll(".task");
  };

  const getTaskCard = (task) => {
    return [..._getTaskCards()].find(
      (taskCard) => taskCard.getAttribute("data-title") == task.title
    );
  };

  const getProjectsBtns = () => {
    return document.querySelectorAll(".project-name");
  };

  return {
    displayTaskForm,
    getCurrentProject,
    setProjectsBtns,
    createAddProjectButton,
    createProjectButton,
    createTaskItem,
    getProjectsBtns,
    showTaskCards,
    setActiveProject,
    showTaskDetails,
  };
})();

export default DomUI;
