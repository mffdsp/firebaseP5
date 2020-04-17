function Bubble(x, y, code){

    this.code = code;
    this.x = x;
    this.y = y;
    this.r = 90;
    this.col = color(255,255,255)
    this.drag = false;
  
    this.display = (main) =>{
        stroke(0);
        fill(this.col);
        if(main){
          ellipse(mouseX, mouseY, this.r, this.r);
        } else  ellipse(this.x, this.y, this.r, this.r);
      
    }
  
    this.update = (main) =>{
      if(main){
        this.x = mouseX;
        this.y = 89;
      }else
        this.x = this.x;
        this.y = this.y;
    }
  
    this.collide = () =>{
      if(mouseIsPressed){
        this.drag = true;
        this.x = mouseX;
        this.y = mouseY;
      }
      
      this.col = color(random(255), random(255), random(255));
    }
  
  }