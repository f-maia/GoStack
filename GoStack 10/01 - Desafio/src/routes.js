const { Router } = require("express");

const { checkProjectIdExists } = require("./middlewares");

const ProjectsController = require("./controllers/ProjectsController");
const TasksController = require("./controllers/TasksController");

const routes = Router();

routes.get("/projects/:id", checkProjectIdExists, ProjectsController.show);

routes.get("/projects", ProjectsController.index);

routes.post("/projects", ProjectsController.store);

routes.post("/projects/:id/tasks", checkProjectIdExists, TasksController.store);

routes.put("/projects/:id", checkProjectIdExists, ProjectsController.update);

routes.delete("/projects/:id", checkProjectIdExists, ProjectsController.delete);

module.exports = routes;
