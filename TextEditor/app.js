let inp = document.querySelector("input");
let para = document.querySelector("p");
inp.value = "hi";

inp.addEventListener("input", function(){
    console.log(this.value);
    para.innerText = this.value;
})