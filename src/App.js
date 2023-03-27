// import logo from './logo.svg';
import './App.css';

import React from "react";
import Square from './Square';

class App extends React.Component {
  constructor() {
    super();
    this.canvas = null;
    this.ctx = null;

    this.width = null;
    this.height = null;

    this.squares = [];
    this.squareSize = 20;
    console.log("Square size :[1]", this.squareSize);

    this.dataCount = 40;
    console.log("Data Count :[1]", this.dataCount);
  }

  loop = () => {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.25)"; //canvas filling color
    this.ctx.fillRect(0, 0, this.width, this.height); //apply filling color


    for (let i = 0; i < this.dataCount; i++) {
      const x = this.random(0 + this.squareSize, this.width - this.squareSize);
      const y = this.random(0 + this.squareSize, this.height - this.squareSize);
      const red = this.random(0, 255);
      const green = this.random(0, 255);
      const blue = this.random(0, 255);     

      const square = new Square(
        this.ctx, x, y, 
        "rgb(" + red + "," + green + "," + blue + ")",
        this.squareSize
      );
      this.squares.push(square);
    }

    for (let i = 0; i < this.dataCount; i++) {
      this.squares[i].draw();
    }

    requestAnimationFrame(this.loop);
  };

  random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  componentDidMount() {
    //set up the canvas
    this.canvas = this.refs.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    //start the animation
    this.loop();
  }

  render() {
    return (
      <div>
        <h1>Canvas 정보  squareSize : {this.squareSize} dataCount : {this.dataCount}</h1>
        <canvas ref="canvas" width={640} height={425} />
      </div>
    );
  }
}

export default App;