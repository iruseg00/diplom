import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "../../App.css";

function Preview() {
  return (
    <div className="preview">
      <h2>Система анализа посадки велосипедиста</h2>
      <div>
          Данное приложение представляет собой систему для коррек-
          тировки посадки с использованием дополненной реальностью. Оно построенное с использованием обученной модели популярной
          нейросети PoseNet, которая будет анализировать позу велосипедиста, а затем
          приложение по данным нейросети выдаст оценку положения осанки, соглас-
          но всем нормам посадки при езде на велосипеде.
      </div>
      <Button className="btn btn_start">
        <Link to="/app">
          <b className="btn_content">Начать</b>
        </Link>
      </Button>
      <p className="preview_access">
        Потребуется разрешить доступ к видеокамере!
      </p>
    </div>
  );
}

export default Preview;
