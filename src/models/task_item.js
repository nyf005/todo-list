const TaskItem = (taskItemTitle, taskItemStatus) => {
  let title = taskItemTitle;
  let completed = taskItemStatus ?? false;

  const updateTaskItem = (taskItemTitle) => {
    title = taskItemTitle;
  };

  const getTaskItemInfos = () => {
    return { title, completed };
  };

  const updateStatus = () => {
    completed = !completed;
  };

  return { updateTaskItem, updateStatus, getTaskItemInfos };
};

export default TaskItem;
