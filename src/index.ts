import express, { Request, Response, Express } from "express";
import ServerConfig from "./config/server.config";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app: Express = express();

app.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "ping ok, Manudev" });
});

app.listen(ServerConfig.PORT, async () => {
  console.log(`Server Started Successfully on port ${ServerConfig.PORT}`);
  const user = await prisma.user.findMany();
  console.log(user);
});
