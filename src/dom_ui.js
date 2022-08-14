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
      document.getElementById("project-form")["projectName"].focus();
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
    if (document.getElementById("project-form")) {
      _hideProjectForm();
    }

    // Remove active class for all projects buttons
    getProjectsBtns().forEach((projectBtn) => {
      projectBtn.classList.remove("active");
    });

    // Add active class to selected project
    selectedProject.classList.add("active");

    // Get selected project name
    const name = selectedProject.getAttribute("data-name");

    // Change tasks div header and name
    projectName.textContent = `${name} Tasks`;
    if (selectedProject.firstChild.style) {
      projectTitle.style.borderLeftColor =
        selectedProject.firstChild.style.borderColor;
    } else {
      projectTitle.style.borderLeftColor = "#fff";
    }

    // Empty tasks card, actions and details div
    taskCardsDiv.innerHTML = "";
    taskActionsDiv.innerHTML = "";
    taskDetailsDiv.innerHTML = "";
  };

  const _displayProjectForm = () => {
    // Hide task item form if displayed before we click on new project button
    if (document.getElementById("task-item-form")) {
      _hideTaskItemForm();
    }

    const addProjectBtn = document.getElementById("addProject");
    const projectForm = ProjectFormComponent();

    // Replace the addProject button by the project form
    addProjectBtn.parentNode.replaceChild(projectForm, addProjectBtn);

    projectForm.addEventListener("submit", (e) => {
      const projectEntry = projectForm["projectName"].value;
      Controller.submitProjectForm(projectEntry);
      _hideProjectForm();
    });

    const cancelBtn = document.getElementById("cancelBtn");
    cancelBtn.addEventListener("click", _hideProjectForm);
  };

  const _hideProjectForm = () => {
    const projectForm = document.getElementById("project-form");
    // Replace project form by addProject button
    projectForm.parentNode.replaceChild(NewProjectBtnComponent(), projectForm);

    const addProjectBtn = document.getElementById("addProject");
    addProjectBtn.addEventListener("click", _displayProjectForm);

    // Enable add task button
    addTaskBtn.disabled = false;
  };

  const setProjectsBtns = (projectsList) => {
    // Add click event to existing projectBtns
    getProjectsBtns().forEach((projectBtn) => {
      projectBtn.addEventListener("click", () => {
        setActiveProject(projectBtn);

        const project = projectsList.getProject(
          projectBtn.getAttribute("data-name")
        );

        if (project) {
          // Load tasks related to selected project
          showTaskCards(project);
        }
      });
    });
  };

  const showTaskCards = (project) => {
    // Get all the task related to project
    const tasks = project.getTasks();

    // Empty tasks div if we are in the same project to avoid fetching old projects again
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

          // Remove active class to all task cards
          _getTaskCards().forEach((tc) => {
            tc.classList.remove("active");
          });

          // Add active class to selected card
          taskCard.classList.add("active");

          showTaskDetails(task.getTaskInfos());
          task.getTaskInfos().items.forEach((item) => {
            createTaskItem(item.getTaskItemInfos());
          });

          if (document.getElementById("project-form")) {
            _hideProjectForm();
          }
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

  const getCurrentTask = () => {
    return document.getElementsByClassName("task active")[0];
  };

  const displayTaskForm = (projectsList) => {
    addTaskBtn.addEventListener("click", () => {
      // Hide Project form if clicked before add task button
      if (document.getElementById("project-form")) {
        _hideProjectForm();
      }

      if (document.getElementById("task-item-form")) {
        _hideTaskItemForm();
      }

      // Get the current project
      const currentProject = getCurrentProject().getAttribute("data-name");

      // Create the task form
      const taskForm = TaskFormComponent(projectsList, currentProject);
      formModal.appendChild(taskForm);
      formModal.style.display = "block";
      document.getElementById("task-form")["title"].focus();

      taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        Controller.submitTaskForm(taskForm);
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

      if (document.getElementById("project-form")) {
        _hideProjectForm();
      }

      if (document.getElementById("task-item-form")) {
        _hideTaskItemForm();
      }

      // Create the task form
      const taskForm = TaskFormComponent(
        Controller.getProjectsList(),
        currentProject,
        task
      );

      // Show the task form
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

      if (document.getElementById("project-form")) {
        _hideProjectForm();
      }

      if (document.getElementById("task-item-form")) {
        _hideTaskItemForm();
      }

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

      if (document.getElementById("project-form")) {
        _hideProjectForm();
      }

      if (document.getElementById("task-item-form")) {
        _hideTaskItemForm();
      }

      // Clear the details section as the task no longer exists
      taskActionsDiv.innerHTML = "";
      taskDetailsDiv.innerHTML = "";
    });

    addItemBtn.addEventListener("click", (e) => {
      if (document.getElementById("project-form")) {
        _hideProjectForm();
      }

      if (document.getElementById("task-item-form")) {
        _hideTaskItemForm();
      }

      // addItemBtn.disabled = true;

      displayTaskItemForm();
      document.getElementById("task-item-form")["task-item-title"].focus();
    });

    taskActionsDiv.append(editTaskBtn, moveTaskBtn, deleteTaskBtn, addItemBtn);
    taskDetailsDiv.append(checkmark, taskTitle, taskDescription, taskItems);
  };

  const displayTaskItemForm = () => {
    const taskItemsDiv = document.getElementById("task-items");
    const addTaskItemForm = TaskItemFormComponent();

    // Get the current task title;
    const taskTitle = getCurrentTask().getAttribute("data-title");

    taskItemsDiv.insertBefore(addTaskItemForm, taskItemsDiv.firstChild);

    addTaskItemForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskItemEntry = addTaskItemForm["task-item-title"].value;
      Controller.submitTaskItemForm(taskTitle, taskItemEntry);
      _hideTaskItemForm();
    });

    const cancelBtn = document.getElementById("cancelBtn");
    cancelBtn.addEventListener("click", _hideTaskItemForm);
  };

  const _hideTaskItemForm = () => {
    const taskItemsDiv = document.getElementById("task-items");
    const taskItemForm = document.getElementById("task-item-form");

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
