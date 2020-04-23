var auth = false;

async function writeData(userTeste){

    var database =  firebase.database();

    await database.ref('admteus').once('value').then(function(snapshot){
            var data = snapshot.val();
            auth = data.auth;
    }).catch();

    if(auth == false){
        console.error("Permissão negada");
        return;
    }
    
    userTeste.forEach(async element => {
        
        reference = await database.ref('user' + element.code);
        reference.set({
            code: element.code,
            posX: element.x,
            posY: element.y,
            text: element.texto
        });

        reference.on('value', (snapshot) =>{
            element.x = snapshot.val().posX;
            element.y = snapshot.val().posY;
            element.texto = snapshot.val().text;
        });
        console.log("Salvo com sucessu");
    
    });
    
    
}
 

function readData(userTeste){

    var database = firebase.database();

    userTeste.forEach(async element =>  {

        await database.ref('user' + element.code).once('value').then( function(snapshot){

            var data = snapshot.val();
            element.x = data.posX;
            element.y = data.posY;
            element.texto = data.text;
        
        }).catch(); 
        start(); 
    });
}
