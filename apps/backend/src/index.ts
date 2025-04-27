import express, { Express, Request, Response } from "express";
import { mensagem } from "./utils/message.js";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: mensagem() });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Servidor rodando em http://localhost:${port}`);
});