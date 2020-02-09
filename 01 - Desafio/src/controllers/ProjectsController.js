const { projects } = require("../mock/projectsMockData");
const findProjectWithId = require("../utils/findProjectWithId");

module.exports = {
  index(req, res) {
    return res.json(projects);
  },

  show(req, res) {
    const { id } = req.params;

    const project = projects.filter(project => project.id === id)[0];

    return res.json(project);
  },

  store(req, res) {
    const { id, title } = req.body;

    if (findProjectWithId(id) >= 0)
      return res.status(400).json({
        error: "This ID is already in use"
      });

    projects.push({ id, title, tasks: [] });

    return res.json(projects);
  },

  update(req, res) {
    const { projectIndex } = req;
    const { title } = req.body;

    if (!title)
      return res.status(400).json({ error: "Project title is required" });

    projects[projectIndex].title = title;

    return res.json(projects);
  },

  delete(req, res) {
    const { projectIndex } = req;

    projects.splice(projectIndex, 1);

    return res.json();
  }
};
