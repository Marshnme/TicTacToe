let playerOneName = document.querySelector(".nameOne")
let playerTwoName = document.querySelector(".nameTwo")

function saveTheName() {
    console.log(this)
    let getInput = this.value;
    localStorage.setItem(`${this.id}`,getInput);
 }

 playerOneName.addEventListener("keyup",saveTheName);
 playerTwoName.addEventListener("keyup",saveTheName);