import * as React from "react";

import * as apiClient from "./apiClient";

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
    <div className="bg-gray-900 p-20 h-screen flex justify-center items-start flex-col">
      <h1 className="text-5xl text-white">Hello Tailwind </h1>
      <p className="text-gray-400 mt-5 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        consequuntur odio aut nobis ab quis? Reiciendis doloremque ut quo fugiat
        eveniet tempora, atque alias earum ullam inventore itaque sapiente iste?
      </p>
      <button className="p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-gray-600">
        Hello Friends
      </button>
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

// {posts.map(({ id, title, category, content }) => (

//   ))}
//   ;

// <div class="grid xl:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-2 max-w-6xl">
//           <div
//             class="flex flex-col bg-gray-200 rounded-lg p-4 m-2"
//             class="h-40 bg-gray-400 rounded-lg"
//             style={{
//               backgroundImage: 'url("https://i.imgur.com/ieOW7wf.jpeg")',
//               backgroundRepeat: "no-repeat",
//               backgroundAttachment: "cover",
//               backgroundPosition: "center",
//             }}
//           ></div>
//           <div className="flex flex-col items-start mt-4">
//             <h4 className="text-xl font-semibold">{title}</h4>
//             <h6 className="text-md font-semibold">{title}</h6>
//             <p className="text-sm">{content}</p>
//             <a
//               className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase"
//               href="details"
//             >
//               Click Here
//             </a>
//           </div>
//         </div>
