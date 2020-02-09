const { projects } = require("../mock/projectsMockData");

module.exports = function(id) {
  return projects.findIndex(project => project.id === id);
};
