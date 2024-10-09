let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.log("click me");
})

let url = 'https://v2.jokeapi.dev/joke/Any?safe-mode';
async function getFact() {
    try{
        let fact = await axios.get(url);
    console.log(fact.setup);
    }catch(err){
        console.log(err);
    }
}