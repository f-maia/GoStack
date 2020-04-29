const findProjectWithId = require("../utils/findProjectWithId");

module.exports = {
  checkProjectIdExists(req, res, next) {
    const { id } = req.params;

    const projectIndex = findProjectWithId(id);

    if (projectIndex < 0)
      return res.status(400).send({
        error: "This project does not exists"
      });

    req.projectId = id;
    req.projectIndex = projectIndex;

    return next();
  },

  countRequests(req, res, next) {
    console.count("Requests: ");
    return next();
  }
};
