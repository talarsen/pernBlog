import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

//get posts from database
export const getPosts = () => db.any("SELECT * FROM posts");

//get ONE post
//not much different from get all but specify params in route.
export const getPost = (id) => db.one(`SELECT * FROM posts WHERE id = ${id}`);

//create post
export const addPost = (title, category, content) =>
  db.one(
    "INSERT INTO posts(title, category,content ) VALUES(${title} ${category} ${content} ${postedOn} ) RETURNING *",
    { title, category, content },
  );

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
