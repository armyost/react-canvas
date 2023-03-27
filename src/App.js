import logo from './logo.svg';
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
  }

  loop = () => {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.25)"; //canvas filling color
    this.ctx.fillRect(0, 0, this.width, this.height); //apply filling color


    while (this.squares.length < 25) {
      // const size = this.random(10, 20);
      // const x = this.random(0 + size, this.width - size);
      // const y = this.random(0 + size, this.height - size);
      // const red = this.random(0, 255);
      // const green = this.random(0, 255);
      // const blue = this.random(0, 255);    
      const size = this.random(10, 20);
      const x = this.random(0 + size, this.width - size);
      const y = this.random(0 + size, this.height - size);
      const red = this.random(0, 255);
      const green = this.random(0, 255);
      const blue = this.random(0, 255);     

      const square = new Square(
        this.ctx, x, y, 
        "rgb(" + red + "," + green + "," + blue + ")",
        size
      );
      this.squares.push(square);
    }

    for (let i = 0; i < this.squares.length; i++) {
      this.squares[i].draw();
      // this.balls[i].update(this.width, this.height);
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
        <h1>Refresh</h1>
        <canvas ref="canvas" width={640} height={425} />
      </div>
    );
  }
}

export default App;