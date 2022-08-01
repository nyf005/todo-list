const Project = (pName) => {
  let name = pName;
  let tasks = [];

  const setProjectName = (newName) => {
    name = newName;
  };

  const getProjectName = () => {
    return name;
  };

  const addTask = (task) => {
    tasks.push(task);
  };

  const getTask = (title) => {
    return tasks.find((task) => task.title == title);
  };

  const getTasks = () => {
    return tasks;
  };

  return {
    setProjectName,
    getProjectName,
    addTask,
    getTask,
    getTasks,
  };
};

export default Project;
