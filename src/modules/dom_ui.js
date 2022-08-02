import Controller from "../index";
import ProjectButton from "../ui_components/project_name_button";
import TaskCard from "../ui_components/task_card";
import TaskItem from "../ui_components/task-item";
import createTaskDetails from "../ui_components/task-details";
import createProjectForm from "../ui_components/project_form";
import addNewProjectBtn from "../ui_components/new_project_button";
import createtaskForm from "../ui_components/task_form";

const DomUI = () => {
  const projectsDiv = document.getElementById("projects");
  const projectTitle = document.getElementById("project-title");
  const projectName = document.querySelector("#project-title h3");

  const taskCardsDiv = document.getElementById("task-cards");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const formModal = document.getElementById("form-modal");

  const taskActionsDiv = document.getElementById("task-actions");
  const taskDetailsDiv = document.getElementById("task-details");
  const taskItemsDiv = document.getElementById("task-items");

  const deleteTaskBtn = document.getElementById("deleteTaskBtn");
  const editTaskBtn = document.getElementById("editTaskBtn");
  const addItemBtn = document.getElementById("addItemBtn");

  // PROJECT
  const createAddProjectButton = () => {
    projectsDiv.parentNode.insertBefore(addNewProjectBtn(), projectsDiv);
    const addProjectBtn = document.getElementById("addProject");

    addProjectBtn.addEventListener("click", () => {
      const projectForm = createProjectForm();
      displayProjectForm();

      projectForm.addEventListener("submit", (e) =>
        Controller.submitProjectForm(e)
      );
    });
  };

  const createProjectButton = (project) => {
    // We create a project button
    let projectBtn = ProjectButton(project.getProjectName());

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

  const displayProjectForm = () => {
    const addProjectBtn = document.getElementById("addProject");
    const projectForm = createProjectForm();
    addProjectBtn.parentNode.replaceChild(projectForm, addProjectBtn);

    projectForm.addEventListener("submit", (e) =>
      Controller.submitProjectForm(e)
    );

    const cancelBtn = document.getElementById("cancelBtn");
    cancelBtn.addEventListener("click", hideProjectForm);
  };

  const hideProjectForm = () => {
    const projectForm = document.getElementById("project-form");
    projectForm.parentNode.replaceChild(addNewProjectBtn(), projectForm);

    const addProjectBtn = document.getElementById("addProject");
    addProjectBtn.addEventListener("click", displayProjectForm);
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
        const taskCard = TaskCard(task.getTask());
        // Add click event to individual tasks
        taskCard.addEventListener("click", () => {
          setActiveTask(taskCard);
          showTaskDetails(task.getTask());
        });

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
  };

  const setActiveTask = (selectedTask) => {
    _getTaskCards().forEach((taskCard) => {
      taskCard.classList.remove("active");
    });

    selectedTask.classList.add("active");
    taskActionsDiv.innerHTML = "";
    taskDetailsDiv.innerHTML = "";
  };

  const displayTaskForm = (projectsList) => {
    addTaskBtn.addEventListener("click", () => {
      const currentProject = getCurrentProject().getAttribute("data-name");
      const taskForm = createtaskForm(projectsList, currentProject);
      formModal.appendChild(taskForm);
      formModal.style.display = "block";

      taskForm.addEventListener("submit", (e) => {
        Controller.submitTaskForm(e);
      });

      const cancelBtn = document.querySelector(
        "#task-form-actions button:last-child"
      );

      cancelBtn.addEventListener("click", hideTaskForm);
      formModal.addEventListener("click", (e) => {
        if (e.target.id == "form-modal") {
          hideTaskForm();
        }
      });
    });
  };

  const hideTaskForm = () => {
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
      editTaskBtn,
      addItemBtn,
    } = createTaskDetails(task);

    // Add event listener to delete task btn
    deleteTaskBtn.addEventListener("click", (e) => {
      // We use the attribute of the deletetaskBtn in the Controller deleteTask function
      Controller.deleteTask(e.currentTarget.getAttribute("data-name"));

      // Clear the details section as the task no longer exists
      taskActionsDiv.innerHTML = "";
      taskDetailsDiv.innerHTML = "";
    });

    taskActionsDiv.append(editTaskBtn, deleteTaskBtn, addItemBtn);
    taskDetailsDiv.append(checkmark, taskTitle, taskDescription, taskItems);
  };

  const createTaskItem = (taskItem) => {
    const item = TaskItem(taskItem);
    taskItemsDiv.appendChild(item);
    taskDetailsDiv.appendChild(taskItemsDiv);
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
    setActiveTask,
    showTaskDetails,
    displayProjectForm,
    hideProjectForm,
    hideTaskForm,
  };
};

export default DomUI;
