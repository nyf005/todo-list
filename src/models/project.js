const Project = (pName) => {
  let name = pName;
  let tasks = [];

  const setProjectName = (newName) => {
    name = newName;
  };

  const getProjectName = () => name;

  const getProjectInfos = () => {
    return { name, tasks };
  };

  const addTask = (task) => {
    tasks.push(task);
  };

  const getTask = (title) => {
    return tasks.find((task) => task.getTaskInfos().title == title);
  };

  const getTasks = () => {
    const ordered = tasks.sort(
      (a, b) =>
        new Date(a.getTaskInfos().dueDate) - new Date(b.getTaskInfos().dueDate)
    );
    return ordered;
  };

  const removeTask = (title) => {
    const taskIndex = tasks.findIndex(
      (task) => task.getTaskInfos().title == title
    );
    tasks.splice(taskIndex, 1);
  };

  return {
    setProjectName,
    getProjectName,
    getProjectInfos,
    addTask,
    getTask,
    getTasks,
    removeTask,
  };
};

export default Project;
