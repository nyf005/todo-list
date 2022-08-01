const ProjectList = () => {
  let projects = [];

  const add = (project) => {
    projects.push(project);
  };

  const getAll = () => {
    return projects;
  };

  const getProject = (name) => {
    return projects.find((project) => project.name == name);
  };

  const remove = (name) => {
    const index = projects.findIndex(name);
    projects.splice(index, 1);
  };

  return { add, getProject, getAll, remove };
};

export default ProjectList;
