import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Posts from "./Posts";
import H3 from "./material-tailwind/components/Heading3";

import "./styles/index.css";
const App = () => (
  <>
    <nav>
      <Link to="/">Home</Link> | <Link to="create">Create Posts </Link>|
      <Link to="details"> Details</Link>
    </nav>
    <main>
      <div className="container mx-auto">
        <H3>Latest Posts</H3>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<DetailPost />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </div>
    </main>
  </>
);

const Home = () => (
  <>
    <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2>
    <Posts />
  </>
);

const CreatePost = () => (
  <>
    <h1 className="text-red-900">This is where I will add posts</h1>
  </>
);

const DetailPost = () => (
  <>
    <h1>One post details will go here</h1>
  </>
);

export default App;
