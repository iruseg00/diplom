import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import { Spin } from "antd";

import Preview from "./pages/preview";
import VideoStream from "./pages/VideoStream";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => setTimeout(() => setLoading(false), 7000), []);

  return (
    <div className="mobile">
      <div></div>
      {loading ? (
        <div className="loading">
          <p className="app_author">
            Дипломный проект разработан студентом группы МС-3 Корольковым А.В..
          </p>
          <br />
          <p>Тема диплома: Система анализа посадки велосипедиста.</p>
          <p className="spiner">Loading.</p>
          <Spin />
        </div>
      ) : (
        <Switch>
          <Route path="/" exact>
            <Preview />
          </Route>
          <Route path="/app">
            <VideoStream />
          </Route>
        </Switch>
      )}
      <div></div>
    </div>
  );
}

export default App;
