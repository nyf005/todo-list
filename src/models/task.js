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

  const getTaskItem = (itemTitle) => {
    return items.find((item) => item.getTaskItemInfos().title == itemTitle);
  };

  const addItem = (item) => {
    items.push(item);
  };

  const removeItem = (itemTitle) => {
    const itemIndex = items.findIndex(
      (item) => item.getTaskItemInfos().title == itemTitle
    );
    items.splice(itemIndex, 1);
  };

  const updateStatus = () => {
    completed = !completed;
  };

  return {
    updateTask,
    updateStatus,
    addItem,
    getTaskInfos,
    getTaskItem,
    removeItem,
  };
};

export default Task;
