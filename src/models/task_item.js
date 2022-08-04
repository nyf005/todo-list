const TaskItem = (taskItemTitle) => {
  let title = taskItemTitle;
  let completed = false;

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
