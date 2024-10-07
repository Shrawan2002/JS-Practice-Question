let h1 = document.querySelector("h1");


function getChange(color,delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10);
            if(num > 3){
                reject("promise rejected");
            }
                h1.style.color = color;
                resolve("promise was resolve");
           
        }, delay);
    });
}

 async function demo(){
  try{
    await getChange("red", 1000);
    await getChange("green", 1000);
    await getChange("yellow", 1000);
  }catch(err){
    console.log("result of promise", err);
  }
}