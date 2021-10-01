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
//not much different from get all but speicify params in route.
postRouter.get("/details", async (req, res) => {
  try {
    const post = await db.getOnePost();
    res.json(post);
  } catch (err) {
    console.error(err.message);
  }
});
export default postRouter;
