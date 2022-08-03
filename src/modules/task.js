const Task = (taskTitle, taskDescription, taskDueDate, taskPriority) => {
  let title = taskTitle;
  let description = taskDescription;
  let dueDate = taskDueDate;
  let priority = taskPriority;
  let completed = false;
  let items = [];

  const updateTask = (title, taskDescription, taskDueDate, taskPriority) => {
    title = title;
    description = taskDescription;
    dueDate = taskDueDate;
    priority = taskPriority;
  };

  const getTaskInfos = () => {
    return { title, description, dueDate, priority, completed, items };
  };

  const addItem = (item) => {
    items.push(item);
  };

  const updateStatus = () => {
    completed = !completed;
  };

  return { updateTask, updateStatus, addItem, getTaskInfos };
};

export default Task;
