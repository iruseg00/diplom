import React, { useRef, useState, useEffect } from "react";
import "../../App.css";
import { Spin } from "antd";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton } from "../../utilities";

function Video({setState = () => {}}) {
  const [loading, setLoading] = useState(true);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => setTimeout(() => setLoading(false), 7000), []);
  useEffect(() => runPosenet(), []);

  //  Load posenet
  const runPosenet = async () => {
    const net = await posenet.load({
      inputResolution: { width: 640, height: 480 },
      scale: 0.8,
    });

    setInterval(() => detect(net), 200);
  };

  const detect = async (net) => {
    // console.log(webcamRef.current.stream);
    if (webcamRef.current) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Make Detections
      const pose = await net.estimateSinglePose(video);
      // await pose execting true or false
      // setState()
      console.log(pose);
      drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
    }
  };

  const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;

    drawKeypoints(pose["keypoints"], 0.6, ctx);
    drawSkeleton(pose["keypoints"], 0.7, ctx);
  };

  const videoConstraints = {
    facingMode: "user",
  };

  return (
    <div className="video-wrapper">
      {loading ? (
        <div className="loading">
          <p className="spiner">Loading.</p>
          <Spin />
        </div>
      ) : (
        <>
          <Webcam
            ref={webcamRef}
            className={"video"}
            videoConstraints={videoConstraints}
          />
          <canvas ref={canvasRef} className={"video"} />
        </>
      )}
    </div>
  );
}

export default Video;
