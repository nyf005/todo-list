import Controller from "../index";
import ProjectButton from "../ui_components/project_name_button";
import TaskCard from "../ui_components/task_card";
import TaskItem from "../ui_components/task-item";
import createTaskDetails from "../ui_components/task-details";
import createProjectForm from "../ui_components/project_form";
import addNewProjectBtn from "../ui_components/new_project_button";

const DomUI = () => {
  const projectsDiv = document.getElementById("projects");
  const projectTitle = document.getElementById("project-title");
  const projectName = document.querySelector("#project-title h3");

  const taskCardsDiv = document.getElementById("task-cards");

  const taskActionsDiv = document.getElementById("task-actions");
  const taskDetailsDiv = document.getElementById("task-details");
  const taskItemsDiv = document.getElementById("task-items");

  const deleteTaskBtn = document.getElementById("deleteTaskBtn");
  const editTaskBtn = document.getElementById("editTaskBtn");
  const addItemBtn = document.getElementById("addItemBtn");

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
    let projectBtn = ProjectButton(project.getProjectName());

    // Add click event to individual projects
    projectBtn.addEventListener("click", () => {
      setActiveProject(projectBtn);
      showProjectTaskCards(project);
    });

    projectsDiv.append(projectBtn);
    return projectBtn;
  };

  const showProjectTaskCards = (project) => {
    const tasks = project.getTasks();
    if (tasks) {
      tasks.forEach((task) => {
        const taskCard = createTaskCard(task);
        taskCardsDiv.append(taskCard);
      });
    }
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

  const createTaskCard = (task) => {
    let taskCard = TaskCard(task);

    // Add click event to individual tasks
    taskCard.addEventListener("click", () => {
      setActiveTask(taskCard);
      showTaskDetails(task);
    });

    taskCardsDiv.appendChild(taskCard);
    return taskCard;
  };

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

    taskActionsDiv.append(editTaskBtn, deleteTaskBtn, addItemBtn);
    taskDetailsDiv.append(checkmark, taskTitle, taskDescription, taskItems);
  };

  const createTaskItem = (taskItem) => {
    const item = TaskItem(taskItem);
    taskItemsDiv.appendChild(item);
    taskDetailsDiv.appendChild(taskItemsDiv);
  };

  const setTaskActionBtnIndex = (index) => {
    deleteTaskBtn.setAttribute("data-index", index);
    editTaskBtn.setAttribute("data-index", index);
    addItemBtn.setAttribute("data-index", index);
  };

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

  const setActiveTask = (selectedTask) => {
    getTaskCards().forEach((taskCard) => {
      taskCard.classList.remove("active");
    });

    selectedTask.classList.add("active");
    taskActionsDiv.innerHTML = "";
    taskDetailsDiv.innerHTML = "";
  };

  const getProjectsBtns = () => {
    return document.querySelectorAll(".project-name");
  };

  const displayProjectsBtns = (projectsList) => {
    // Add click event to projectBtns
    getProjectsBtns().forEach((projectBtn) => {
      projectBtn.addEventListener("click", () => {
        setActiveProject(projectBtn);

        const project = projectsList.getProject(
          projectBtn.getAttribute("data-name")
        );

        if (project) {
          // Load all tasks related to default project
          project.tasks.forEach((task) => {
            createTaskCard(task);
          });
        }
      });
    });
  };

  return {
    displayProjectsBtns,
    createAddProjectButton,
    createProjectButton,
    createTaskCard,
    createTaskItem,
    getProjectsBtns,
    showProjectTaskCards,
    setActiveProject,
    setActiveTask,
    setTaskActionBtnIndex,
    showTaskDetails,
    displayProjectForm,
    hideProjectForm,
  };
};

export default DomUI;
