import express from "express";
import http from "http";
import routes from "../routes/routers";
import { RabbitMQServer } from "./RabbitMQServer";

const app = express();
const appPort = process.env.PORT || 3002;

const httpServer = http.createServer(app);

app.set("port", appPort);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

const serveramqp = async () => {
  const server = new RabbitMQServer();
  await server.start();
  await server.consume("micro.common.user", (message) =>
    console.log(message.content.toString())
  );
};

serveramqp();

export { app, httpServer };
