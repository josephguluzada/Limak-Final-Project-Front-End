// Accordion

const accordion = document.getElementsByClassName("content-box");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        accordion[i].classList.toggle("active")
    })

}


