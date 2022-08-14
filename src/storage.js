import ProjectList from "./models/project_list";
import Project from "./models/project";
import Task from "./models/task";
import TaskItem from "./models/task_item";

const Storage = (() => {
  const init = () => {
    if (localStorage.length == 0) {
      localStorage.setItem("projects", JSON.stringify([]));
    }
  };

  const saveProject = (project) => {
    let projectsList = JSON.parse(localStorage.getItem("projects"));
    if (!projectsList.includes(project.name)) {
      projectsList.push(project.name);
      localStorage.setItem("projects", JSON.stringify(projectsList));
      localStorage.setItem(project.name, JSON.stringify(project));
    }
  };

  const removeProject = (projectName) => {
    const projectsList = JSON.parse(localStorage.getItem("projects"));

    const index = projectsList.findIndex((project) => project == projectName);
    projectsList.splice(index, 1);

    localStorage.removeItem(projectName);
    localStorage.setItem("projects", JSON.stringify(projectsList));
  };

  const saveTask = (project, task) => {
    const saved_project = JSON.parse(localStorage.getItem(project.name));
    const saved_task = saved_project.tasks.find((t) => t.title == task.title);

    if (saved_task == undefined) {
      saved_project.tasks.push(task);
      localStorage.setItem(project.name, JSON.stringify(saved_project));
    } else {
      const index = saved_project.tasks.findIndex((t) => t.title == task.title);

      if (task.items) {
        let items = [];
        task.items.forEach((item) => {
          items.push(item.getTaskItemInfos());
        });
        task.items = items;
      }

      saved_project.tasks.splice(index, 1, task);
      localStorage.setItem(project.name, JSON.stringify(saved_project));
    }
  };

  // Move Task
  const moveTask = (fromProject, toProject, task) => {
    const from = JSON.parse(localStorage.getItem(fromProject.name));
    const index = from.tasks.findIndex((t) => t.title == task.title);
    const to = JSON.parse(localStorage.getItem(toProject.name));
    to.tasks.push(task);
    from.tasks.splice(index, 1);

    localStorage.setItem(fromProject.name, JSON.stringify(from));
    localStorage.setItem(toProject.name, JSON.stringify(to));
  };

  // Remove Task
  const removeTask = (project, taskTitle) => {
    const saved_project = JSON.parse(localStorage.getItem(project.name));
    const index = saved_project.tasks.findIndex(
      (task) => task.title == taskTitle
    );
    saved_project.tasks.splice(index, 1);
    localStorage.setItem(project.name, JSON.stringify(saved_project));
  };

  const getProjects = () => {
    let list = ProjectList();
    const projectsList = Object.assign(list, {});
    const projects = JSON.parse(localStorage.getItem("projects"));

    projects.forEach((projectName) => {
      let newProject = Project(projectName);
      let project = Object.assign(
        newProject,
        JSON.parse(localStorage.getItem(projectName))
      );

      project.tasks.forEach((taskObj) => {
        let newTask = Task(
          taskObj.title,
          taskObj.description,
          taskObj.dueDate,
          taskObj.priority,
          taskObj.completed
        );

        let task = Object.assign(newTask, taskObj);

        taskObj.items.forEach((itemObj) => {
          let newItem = TaskItem(itemObj.title, itemObj.completed);

          let item = Object.assign(newItem, itemObj);

          task.addItem(item);
        });

        project.addTask(task);
      });
      projectsList.add(project);
    });

    return projectsList;
  };

  return {
    init,
    saveProject,
    removeProject,
    saveTask,
    moveTask,
    removeTask,
    getProjects,
  };
})();

export default Storage;
