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

//get one post
postRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const post = await db.getPost(id);
    res.json(post);
  } catch (err) {
    console.error(err.message);
  }
});
export default postRouter;
