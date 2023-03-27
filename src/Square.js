class Square {
    constructor(ctx, x, y, color, size) {
      this.ctx = ctx;
      this.x = x; //horizontal position
      this.y = y; //vertical position
      this.color = color;
      this.size = size;
    }
  
    draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.rect(this.x, this.y, this.size, this.size)
      this.ctx.fill();
    }
    
    random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }
  
  export default Square;