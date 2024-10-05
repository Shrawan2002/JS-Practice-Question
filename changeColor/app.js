let h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color was change");
        },delay);
    })
}

changeColor("red", 1000).then(()=>{
    console.log("color was change");
    return changeColor("blue", 1000);
})
.then(()=>{
    console.log("color blue was change");
    return changeColor("green", 1000);
})
.catch(()=>{
    console.log("color was note change");
})