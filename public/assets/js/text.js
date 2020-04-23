function writeDataText(){
    
    var database =  firebase.database();

    reference = database.ref('text');

    reference.set({
        value: document.getElementById("textBody").value
    });

    console.log("Escrito");
    
}
 

async function readDataText(){
    console.log("sdaoksdkaopskpdaoadkposdskopkopdas");

    var data;
    var database = firebase.database();

    await database.ref('text').once('value').then( function(snapshot){

        data = snapshot.val();
        
    }).catch(); 
    console.log("LEU O TEXTO");
    document.getElementById("textBody").value = data.value;


}
