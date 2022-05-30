let x = document.querySelector(".nameOne")

console.log(x.value)

function saveTheName() {
    var getInput = x.value;
    localStorage.setItem("OneName",getInput);
 }

 x.addEventListener("keyup",saveTheName);