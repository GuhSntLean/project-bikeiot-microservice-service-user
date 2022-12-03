import express from "express";
import http from "http";
import routes from "../routes/routers";
import { UserUseCase } from "../usecases/UserUseCase";
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
  await server.consume("information.user", (message) => {
    const infoUser = message.content.toString();
    const userCase = new UserUseCase();
    userCase.execute(infoUser);
  });
};

serveramqp();

export { app, httpServer };
