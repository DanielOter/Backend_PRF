const { decodeToken } = require("./middleware/TokenMiddleware");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { bindRoutes } = require("./routes/index");
const {
    errorHandlerMiddleware,
} = require("./middleware/errorHandlerMiddleware");
const app = express();
const server = require("http").Server(app);

const PORT = 8081;


app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// app.use("public/uploads", express.static(public/uploads")) 

app.use(express.urlencoded({ extended: true }));
// app.use(decodeToken);

bindRoutes(app);

app.use(errorHandlerMiddleware);

server.listen(PORT, () => console.log(`Listening on http://${PORT}/`));

module.exports = server;
