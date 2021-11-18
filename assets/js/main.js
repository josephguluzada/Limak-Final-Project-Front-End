// Accordion

const accordion = document.getElementsByClassName("content-box");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        accordion[i].classList.toggle("active")
    })

}

// User Panel Button

const userBtn = document.querySelector(".user-panel-btn");
const dropDownContent = document.querySelector(".dropdown-menu");

userBtn.addEventListener("click", () => {
    dropDownContent.classList.toggle("active");
})





