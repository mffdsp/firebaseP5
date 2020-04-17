
function writeData(userTeste){
    var database =  firebase.database();
    
    userTeste.forEach(element => {
        database.ref('user' + element.code).set({
            code: element.code,
            posX: element.x,
            posY: element.y
        });
    });
    
    console.log("Salvo com sucesso");
    
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
