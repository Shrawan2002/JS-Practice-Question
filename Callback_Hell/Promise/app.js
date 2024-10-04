
function saveToDb(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random()*10) +1;
        if(internetSpeed > 4){
            resolve();
        }else{
            reject();
        }
    })
}

saveToDb("shrawan").
then(()=>{
    console.log("promise was fulfiled 1");
    return saveToDb("apna college")
})
.then(()=>{
    console.log("promise was fullfiled 2");
})

.catch(()=>{
    console.log("promise was rejected");
})