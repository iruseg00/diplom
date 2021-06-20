import React from "react";
import "../../App.css";
import {
  InfoCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

function Notification({ variant = "detect" }) {
  const detect = () => {
    return (
      <div className="Notif detect">
        <p className="notif_content">
          Наведите камеру на велосипедиста!
          <InfoCircleOutlined className="icon" />
        </p>
      </div>
    );
  };

  const success = () => {
    return (
      <div className="Notif success">
        <p className="notif_content">
        Посадка корректна!
          <CheckCircleOutlined className="icon" />
        </p>
      </div>
    );
  };

  const invalid = () => {
    return (
      <div className="Notif invalid">
        <p className="notif_content">
        Посадка некорректна!
          <CloseCircleOutlined className="icon" />
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
