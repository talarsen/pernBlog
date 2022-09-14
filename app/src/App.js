import * as React from "react";

import { Routes, Route } from "react-router-dom";

import Details from "./Details";
import Posts from "./Posts";
import H3 from "./material-tailwind/components/Heading3";
import Hero from "./material-tailwind/components/Hero.js";
import Navbar from "./material-tailwind/components/Navbar.js";

import "./styles/index.css";

const App = () => (
  <>
    <nav>
      <Navbar />
    </nav>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/details" element={<Details id={1} />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </main>
  </>
);

// const Dashboard = () => {
//   return (
//     <div>
//       {/* This element will render either <DashboardMessages> when the URL is
//           "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
//       */}
//       <Outlet />
//     </div>
//   );
// };

const Home = () => (
  <>
    <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2>
    <Hero />
    <div className="container mx-auto">
      <H3>Latest Posts</H3>
    </div>
    <Posts />
    <div className="flex bg-gradient-to-r from-green-400 to-blue-500 justify-center inline-block">
      <div>
        <h3>AS SEEN ON</h3>
      </div>
      <div>
        <ul>
          <li>National Geographic</li>
          <li>Discovery</li>
          <li>Active NorCal</li>
        </ul>
      </div>
    </div>
  </>
);

const CreatePost = () => (
  <>
    <h1 className="text-red-900">This is where I will add posts</h1>
  </>
);

export default App;
