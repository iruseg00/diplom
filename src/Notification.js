import React from "react";
import "./App.css";
import {
  InfoCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

function Notification({ variant = "detect" }) {
  const detect = () => {
    return (
      <div className="Notif detect">
        <p>
          Наведите камеру на велосипедиста!
          <InfoCircleOutlined />
        </p>
      </div>
    );
  };

  const success = () => {
    return (
      <div className="Notif success">
        <p>
          Посадка корректна!
          <CheckCircleOutlined />
        </p>
      </div>
    );
  };

  const invalid = () => {
    return (
      <div className="Notif invalid">
        <p>
          Посадка некорректна!
          <CloseCircleOutlined />
        </p>
      </div>
    );
  };

  const generateContent = () => {
    if (variant === "detect") return detect();
    if (variant === "success") return success();
    if (variant === "invalid") return invalid();
    return detect();
  };

  return <>{generateContent()}</>;
}

export default Notification;
