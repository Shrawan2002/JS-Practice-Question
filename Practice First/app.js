let btn = document.createElement("button");
btn.innerText = "Click Me!";
let p = document.querySelector("p");
p.insertAdjacentElement("afterend" , btn);

btn.classList.add("color");

let para = document.createElement("p");
para.innerText = "Hey , I am red";
para.classList.add("hello");

let body = document.querySelector("body");
body.appendChild(para);

let h3 = document.createElement("h3");
h3.innerText = "I am a blue h3";
body.appendChild(h3);