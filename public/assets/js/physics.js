function collideHandler(bn, freeM){

    for(let i = 0;  i < bn.length; i++){
       
        let distance = int(dist(bn[i].x, bn[i].y, mouseX, mouseY)); 
    
        if(distance < (mainB.r/2 + bn[i].r/2)){
           
          //justOne
          freeM = true;
          for(let j = 0; j < bn.length; j++){
              if(i != j){
                if(bn[j].drag){
                  freeM = false;
                }
              }
          }
          if(freeM){
            bn[i].collide();
          }
          //justOne
    
        }
    
    }
}

function moveIncress(){
  moveSpeed += 1;
  console.log("MoveS");
  setTimeout(moveIncress, 2000);
}

function moveHandler(){
  
  let radius = diameter/2;
  
  if(keyIsDown(65) && x - radius >= 0){
    x -= moveSpeed;
  }
  if(keyIsDown(68)  && x + radius <= canvasX){
    x += moveSpeed;
  }
  if(keyIsDown(87) && y - radius >= 0){
    y -= moveSpeed;
  }
  if(keyIsDown(83) && y + radius <= canvasY){
    //console.log([x, y]);
    y += moveSpeed;
  }
  
}

//entre 2
function calcCollide(bn){

  for(var i = 0; i < bn.length; i++){
    for(var j = 0; j < bn.length; j++){

      let distance = int(dist(bn[i].x, bn[i].y, bn[j].x, bn[j].y));
                      
      if(i != j && distance < (bn[i].r/2)){
        console.table(distance);
        bn[i].collide();
        bn[j].collide();
      }

    }
  }
  
}