import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 8080;

// @ts-ignore
app.get("/", (_req: Request, res: Response) => {
	return res.send("Express Typescript on Vercel");
});

// @ts-ignore
app.get("/ping", (_req: Request, res: Response) => {
	return res.send("pong 🏓");
});

app.listen(port, () => {
	return console.log(`Server is listening on ${port}`);
});
