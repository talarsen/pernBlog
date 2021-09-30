/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";

import { Link } from "react-router-dom";

import * as apiClient from "./apiClient";
import Card from "./material-tailwind/components/Card";
import CardBody from "./material-tailwind/components/CardBody";
import CardImage from "./material-tailwind/components/CardImage";
import H3 from "./material-tailwind/components/Heading3";
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
        {posts.map(({ id, imageurl, title, category, content }) => (
          <Card className="p-8">
            <CardImage src={imageurl} alt="Card Image" />
            <CardBody>
              <H3>{title}</H3>
              <Paragraph>{content}</Paragraph>
              <div>
                <Link to="details">
                  {" "}
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Details
                  </button>
                </Link>

                <p className="underline p-2 mr-10">Category: {category}</p>
              </div>
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
