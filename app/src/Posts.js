import * as React from "react";

import * as apiClient from "./apiClient";
import Card from "./material-tailwind/components/Card";
import CardBody from "./material-tailwind/components/CardBody";
// import Button from "@material-tailwind/react/Button";
import CardFooter from "./material-tailwind/components/CardFooter";
import CardImage from "./material-tailwind/components/CardImage";
import H6 from "./material-tailwind/components/Heading6";
import Paragraph from "./material-tailwind/components/Paragraph";

const Posts = () => {
  const [posts, setPosts] = React.useState([]);

  const loadPosts = async () => setPosts(await apiClient.getPosts());
  const addPost = (post) => apiClient.addPost(post).then(loadPosts);

  React.useEffect(() => {
    loadPosts();
  }, []);

  return (
    <section>
      <PostList {...{ posts }} />
      <AddPost {...{ addPost }} />
    </section>
  );
};

const PostList = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4 m-10">
      <>
        {posts.map(({ id, title, category, content }) => (
          <Card className="p-8">
            <CardImage></CardImage>
            <CardBody>
              <H6>{title}</H6>
              <Paragraph>{content}</Paragraph>
              <CardFooter></CardFooter>
            </CardBody>
          </Card>
        ))}
        ;
      </>
    </div>
  );
};

const AddPost = ({ addPost }) => {
  const [createPost, setcreatePost] = React.useState("");

  const canAdd = createPost !== "";

  const onSubmit = (e) => {
    e.preventDefault();
    if (canAdd) {
      addPost(createPost);
      setcreatePost("");
    }
  };

  return (
    <form>
      <label>
        New Post:{" "}
        <input
          onChange={(e) => setcreatePost(e.currentTarget.value)}
          value={createPost}
        />
      </label>
      <button onSubmit={onSubmit} disabled={!canAdd}>
        Add
      </button>
    </form>
  );
};

export default Posts;
