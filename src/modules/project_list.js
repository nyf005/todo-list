const ProjectList = () => {
  let projects = [];

  const add = (project) => {
    projects.push(project);
  };

  const getAll = () => {
    return projects;
  };

  const getProject = (name) => {
    return projects.find((project) => project.getProjectName() == name);
  };

  const remove = (name) => {
    const index = projects.findIndex(
      (project) => project.getProjectName() == name
    );
    projects.splice(index, 1);
  };

  return { add, getProject, getAll, remove };
};

export default ProjectList;
