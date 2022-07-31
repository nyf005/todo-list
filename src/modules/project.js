const createProject = () => {
  let name = "";
  let tasks = [];

  const setProjectName = (name) => {
    name = name;
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

export default createProject;
