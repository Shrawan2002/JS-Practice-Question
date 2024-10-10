let btn = document.querySelector("button");

btn.addEventListener("click",async function(){
    console.log("click me");
    let result = await getFact();
    console.log(result);
    let para = document.querySelector("#random");
    para.innerText = result;
})

let url = 'https://official-joke-api.appspot.com/random_joke';
async function getFact() {
    try{
        let fact = await fetch(url);
        let  data = await fact.json();
    // console.log(data.punchline);
    // console.log(data.setup);
    return data.setup;
    }catch(err){
        console.log(err);
        return "page is not found";
    }
}