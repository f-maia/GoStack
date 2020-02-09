const express = require("express");
const { countRequests } = require("./middlewares");
const routes = require("./routes");

const server = express();

server.use(express.json());
server.use(countRequests);
server.use(routes);

server.listen(3000);
