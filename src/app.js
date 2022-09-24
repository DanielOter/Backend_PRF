const express = require("express");
const cors = require("cors");
const { bindRoutes } = require("./routes/index");
const {
    errorHandlerMiddleware,
} = require("./middleware/errorHandlerMiddleware");
const app = express();
const server = require("http").Server(app);

const PORT = 8081;

app.use(cors());
app.use(express.json());

bindRoutes(app);

app.use(errorHandlerMiddleware);

server.listen(PORT, () => console.log(`Listening on http://${PORT}/`));

module.exports = server;