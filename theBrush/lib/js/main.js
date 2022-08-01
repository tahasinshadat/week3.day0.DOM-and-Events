let newSrc = "assets/rengar.png"

let btn = document.querySelector(".main_container")

btn.onclick = function() {
    document.getElementById("rengar").src = newSrc
    alert("You've been deleted!")
}