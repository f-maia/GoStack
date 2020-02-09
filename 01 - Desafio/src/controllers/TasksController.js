const { projects } = require("../mock/projectsMockData");

module.exports = {
  store(req, res) {
    const { projectIndex } = req;
    const { title: taskTitle } = req.body;

    projects[projectIndex].tasks.push(taskTitle);

    return res.json(projects[projectIndex]);
  }
};
