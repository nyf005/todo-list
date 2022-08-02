const Task = (taskTitle, taskDescription, taskDueDate, taskPriority) => {
  let title = taskTitle;
  let description = taskDescription;
  let dueDate = taskDueDate;
  let priority = taskPriority;
  let completed = false;
  let items = [];

  const setTask = (title, description, dueDate, priority) => {
    title = title;
    description = description;
    dueDate = dueDate;
    priority = priority;
  };

  const getTask = () => {
    return { title, description, dueDate, priority, completed, items };
  };

  const addItem = (item) => {
    items.push(item);
  };

  const setStatus = () => {
    completed = !completed;
  };

  return { setTask, setStatus, addItem, getTask };
};

export default Task;
