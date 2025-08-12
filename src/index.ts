import express, { Request, Response, Application } from "express";
import ServerConfig from "./config/server.config";

const app: Application = express();

app.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "ping ok, Manudev" });
});

app.listen(ServerConfig.PORT, () => {
  console.log(`Server Started Successfully on port ${ServerConfig.PORT}`);
});
