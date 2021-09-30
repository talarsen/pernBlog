import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Posts from "./Posts";
import Details from "./material-tailwind/components/Details";
import H3 from "./material-tailwind/components/Heading3";
import Hero from "./material-tailwind/components/Hero.js";
import Navbar from "./material-tailwind/components/Navbar.js";

import "./styles/index.css";
const App = () => (
  <>
    <nav>
      <Navbar />
      <Link to="/">Home</Link> | <Link to="create">Create Posts </Link>|
      <Link to="details"> Details</Link>
    </nav>
    <main>
      <Hero />
      <div className="container mx-auto">
        <H3>Latest Posts</H3>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
        {/* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/create">
            <CreatePost />
          </Route>
        </Switch> */}
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

export default App;
