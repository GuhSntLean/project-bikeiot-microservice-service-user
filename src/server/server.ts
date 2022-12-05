import { app, httpServer } from "./app";
import os from "os";
import AppDataSource from "../config/AppDataSource";
import { RabbitMQServer } from "./RabbitMQServer";
import { UserUseCase } from "../usecases/UserUseCase";

const serveramqp = async () => {
  const server = new RabbitMQServer();
  await server.start();
  await server.consume("information.user", (message) => {
    const infoUser = message.content.toString();
    const userCase = new UserUseCase();
    userCase.execute(infoUser);
  });
};

const server = async () => {
  try {
    AppDataSource.initialize().then(() => {
      httpServer.listen(app.get("port"), () => {
        console.info(
          `Server is running at port http://${os.hostname}:${app.get("port")}`
        );
      });
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

server();
serveramqp();
