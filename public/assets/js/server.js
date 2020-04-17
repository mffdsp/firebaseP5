



function writeData(userTeste){
    var database =  firebase.database();

    userTeste.forEach(element => {
        
        reference = database.ref('user' + element.code);
        reference.set({
            code: element.code,
            posX: element.x,
            posY: element.y
        });

        reference.on('value', (snapshot) =>{
            console.log("setou")
            element.x = snapshot.val().posX;
            element.y = snapshot.val().posY;
        });
    });
    
    console.log("Salvo com sucessu");
    
}
 

function readData(userTeste){

    var database = firebase.database();

    userTeste.forEach(element => {

        database.ref('user' + element.code).once('value').then( function(snapshot){

            var data = snapshot.val();
            element.x = data.posX;
            element.y = data.posY;
        
        }).catch();
    });
    
}
