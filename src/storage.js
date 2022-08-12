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

  // Save Task Items
  const saveTaskItem = (project, task, taskItem) => {
    const saved_project = JSON.parse(localStorage.getItem(project.name));
    const saved_task = saved_project.tasks.find((t) => t.title == task.title);
    const saved_task_item = saved_task.items.find(
      (t_item) => t_item.title == taskItem.title
    );

    if (saved_task_item == undefined) {
      saved_task.items.push(taskItem);
      localStorage.setItem(project.name, JSON.stringify(saved_project));
    } else {
      const itemIndex = saved_task.items.findIndex(
        (t_item) => t_item.title == taskItem.title
      );
      saved_task.items.splice(itemIndex, 1, taskItem);
      localStorage.setItem(project.name, JSON.stringify(saved_project));
    }
  };

  // Move Task
  const moveTask = () => {};

  // Remove Project
  const removeProject = (project) => {
    let projectsList = JSON.parse(localStorage.getItem("projects"));
  };

  // Remove Task

  // Remove Task Item

  return {
    init,
    saveProject,
    saveTask,
    saveTaskItem,
  };
})();

export default Storage;
