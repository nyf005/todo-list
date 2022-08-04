const Project = (pName) => {
  let name = pName;
  let tasks = [];

  const setProjectName = (newName) => {
    name = newName;
  };

  const getProjectName = () => name;

  const addTask = (task) => {
    tasks.push(task);
  };

  const getTask = (title) => {
    return tasks.find((task) => task.getTaskInfos().title == title);
  };

  const getTasks = () => tasks;

  const removeTask = (title) => {
    const taskIndex = tasks.findIndex(
      (task) => task.getTaskInfos().title == title
    );
    tasks.splice(taskIndex, 1);
  };

  return {
    setProjectName,
    getProjectName,
    addTask,
    getTask,
    getTasks,
    removeTask,
  };
};

export default Project;
