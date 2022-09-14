import React from "react";

import * as apiClient from "./apiClient.js";
import Card from "./material-tailwind/components/Card";
import CardBody from "./material-tailwind/components/CardBody";
import CardImage from "./material-tailwind/components/CardImage";
import H3 from "./material-tailwind/components/Heading3";
import Paragraph from "./material-tailwind/components/Paragraph";
const Details = ({ id }) => {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    const loadPost = async () => setPost(await apiClient.getPost(id));
    loadPost();
  }, [id]);
  return (
    <section>
      {post && <DetailList post={post} id={id} />}
      {/* <AddPost {...{ addPost }} /> */}
    </section>
  );
};

const DetailList = ({ post }) => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-4 m-10">
        <Card className="p-8">
          <CardImage src={post.imageurl} alt="Card Image" />
          <CardBody>
            <H3>{post.title}</H3>
            <Paragraph>{post.content}</Paragraph>
            <div>
              <p className="underline p-2 mr-10">Category: {post.category}</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default Details;
