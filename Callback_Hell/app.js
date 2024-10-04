

function saveToDb(data,sucess,failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;

    if(internetSpeed > 4){
        sucess();
    }else{
        failure();
    }
}

saveToDb("shrawan" , ()=>{
    console.log("success: data was saved 1");
    saveToDb("aman", ()=>{
        console.log("success: data was saved 2");
    }, ()=>{
        console.log("failed2: data was not saved");
    } )
}, ()=>{
    console.log("failed1: data was not saved");
})