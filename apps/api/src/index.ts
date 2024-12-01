import express, { Request, Response, Application } from "express";

const app: Application = express();
const port = process.env.PORT || 4009;

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
