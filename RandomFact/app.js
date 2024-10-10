let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.log("click me");
})

let url = 'https://official-joke-api.appspot.com/random_joke';
async function getFact() {
    try{
        let fact = await axios.get(url);
    console.log(fact.id);
    }catch(err){
        console.log(err);
    }
}