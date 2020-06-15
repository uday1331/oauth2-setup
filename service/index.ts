import express from "express";

const app = express();

const PORT = 3001;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ ...req.headers, check: "test" });
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
