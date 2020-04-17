module.exports = function Bubble(x, y){

    this.x = x;
    this.y = y;
    this.r = 90;
    this.col = color(0,0,155)
  
    this.display = (main) =>{
        stroke(0);
        fill(this.col);
        if(main){
          ellipse(mouseX, mouseY, this.r, this.r);
        } else   ellipse(this.x, this.y, this.r, this.r);
      
    }
    this.update = (main) =>{
        if(main){
          this.x = mouseX;
          this.y = 89;
        }else
          this.x = x;
          this.y = y;
      }
    
      this.collide = () =>{
        this.col = color(random(255), random(255), random(255));
      }
    
}