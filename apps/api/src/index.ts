import type { Request, Response, Application } from "express";
import express from "express";

const app: Application = express();
const port = process.env.PORT || 5001;

app.get("/", (_req: Request, res: Response) => {
	return res.send("Express Typescript on Vercel");
});

app.get("/ping", (_req: Request, res: Response) => {
	return res.send("pong 🏓");
});

app.listen(port, () => {
	console.log(`Server is listening on ${port}`);
});
