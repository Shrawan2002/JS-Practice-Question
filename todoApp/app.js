let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.innerText = inp.value;
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
})


ul.addEventListener("click", function(event){
    console.dir(event.target);
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         console.log("button was click!");
//         let par = this.parentElement;
//         par.remove();
//     })
// }
