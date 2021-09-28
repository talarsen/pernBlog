import express from "express";

import * as db from "./db.mjs";

const postRouter = express.Router();

postRouter.get("/", async (request, response) => {
  const posts = await db.getPosts();
  response.json(posts);
});

postRouter.use(express.json());
postRouter.post("/", async (request, response) => {
  const post = await db.addPost(request.body);
  response.status(201).json(post);
});

export default postRouter;
