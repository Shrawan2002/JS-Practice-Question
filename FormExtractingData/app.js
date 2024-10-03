let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let user = this.elements[0];
    let pass = this.elements[1];
    let btn = this.elements[2];
    console.log(user.value);
    console.log(pass.value);
    console.log(btn.innerText);
})