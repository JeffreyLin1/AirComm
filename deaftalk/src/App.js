// 0. Install fingerpose npm install fingerpose
// 1. Add Use State
// 2. Import emojis and finger pose import * as fp from "fingerpose";
// 3. Setup hook and emoji object
// 4. Update detect function for gesture handling
// 5. Add emoji display to the screen

///////// NEW STUFF ADDED USE STATE
import React, { useRef, useState, useEffect } from "react";
///////// NEW STUFF ADDED USE STATE

// import logo from './logo.svg';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./App.css";
import { drawHand } from "./utilities"; 
import { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z } from "./signs";

///////// NEW STUFF IMPORTS
import * as fp from "fingerpose";
import victory from "./victory.png";
import thumbs_up from "./thumbs_up.png";
///////// NEW STUFF IMPORTS


function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);


  ///////// NEW STUFF ADDED STATE HOOK
  const [sentence, setSentence] = useState("");
  const translationTextRef = useRef(null);
  ///////// NEW STUFF ADDED STATE HOOK

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    const interval = setInterval(() => {
      detect(net);
    }, 1000);
  };


  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      // console.log(hand);

      ///////// NEW STUFF ADDED GESTURE HANDLING

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z
        ]);

        const gesture = await GE.estimate(hand[0].landmarks, 8);
      
        //console.log(gesture);

        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          //console.log(gesture.gestures);

          const confidence = gesture.gestures.map(
            (prediction) => prediction.score
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );

       
          console.log(gesture.gestures[maxConfidence].name);
         
          setSentence(prevSentence => prevSentence + (gesture.gestures[maxConfidence].name));  
          

        }
        
      }

      
      ///////// NEW STUFF ADDED GESTURE HANDLING
      //console.log(sign);
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }

  };

  useEffect(()=>{runHandpose()},[]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(sentence);
  };
  const handleResetClick = () => {
    setSentence("");
  };

  return (

    
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
         <div className="container">
      <div className="translationBox">
        <div className="translationContent">
          <h2 className="translationHeading">Translation</h2>
          <div className="translationText" id="translationText">{sentence}</div>
          <div className="buttonContainer">
            <button className="copyButton" onClick={handleCopyClick}>Copy</button>
            <button className="resetButton" onClick={handleResetClick}>Reset</button>
          </div>
        </div>
      </div>
    </div>
      </header>
    </div>
  );
}

export default App;