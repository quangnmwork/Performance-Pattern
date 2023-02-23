import React, { Suspense, lazy } from "react";

import "./App.css";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const Chat = lazy(
  () => import(/* webpackChunkName: "home" */ "./components/Chat")
);

const Overview = lazy(
  () => import(/* webpackChunkName: "overview" */ "./components/Overview")
);
const Settings = lazy(
  () => import(/* webpackChunkName: "settings" */ "./components/Settings")
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Chat />}></Route>
          <Route path="/overview" element={<Overview />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
