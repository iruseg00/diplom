import React, { useState, useEffect } from "react";
import "../../App.css";
import { Button, Spin } from "antd";
import { Link } from "react-router-dom";

import Video from "../../components/Video";
import Notification from "../../components/Notification";

function VideoStream() {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState('detect');

  useEffect(() => setTimeout(() => setLoading(false), 7000), []);

  return (
    <div>
      {loading ? (
        <div className="loading">
          <p className="spiner">Загрузка видео...</p>
          <Spin />
        </div>
      ) : (
        <div className="videostream">
          <Video setState={setState} />
          <Notification variant={state} />
          <Button className="btn">
            <Link to="/">
              <b className="btn_content">Закончить</b>
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}

export default VideoStream;
