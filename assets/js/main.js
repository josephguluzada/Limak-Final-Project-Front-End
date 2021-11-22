// Accordion

const accordion = document.getElementsByClassName("content-box");

function removeActivesInAccordion() {
    for (let i = 0; i < accordion.length; i++) {
        accordion[i].classList.remove("active");
    }
}

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        removeActivesInAccordion();
        accordion[i].classList.toggle("active");
    })

}



// User Panel Button

const userBtn = document.querySelector(".user-panel-btn");
const dropDownContent = document.querySelector(".dropdown-menu");

userBtn.addEventListener("click", (e) => {
    if (e.target.id === "userPanelBtn")
        dropDownContent.classList.toggle("active");
})

document.addEventListener("mouseup", (e) => {
    if (e.target.id !== "userPanelBtn" && e.target.id !== "userPanelList")
        dropDownContent.classList.remove("active");
})


// User Panel Content Header

const flagBtn = document.querySelectorAll("#headerList .nav-item .nav-link");

function removeActivesInFlag() {
    for (let i = 0; i < flagBtn.length; i++) {
        flagBtn[i].classList.remove("active");
    }
}

for (let i = 0; i < flagBtn.length; i++) {
    flagBtn[i].addEventListener("click", function () {
        if (!flagBtn[i].classList.contains("active")) {
            removeActivesInFlag();
            flagBtn[i].classList.add("active")
        }
    })
}


// Package Show Button

const showBtn = Array.from(document.querySelectorAll(".package-table button"));
const collapseDiv = Array.from(document.querySelectorAll(".collapse"));

for (let i = 0; i < showBtn.length; i++) {
    showBtn[i].addEventListener("click", function () {
        let target = this.getAttribute("data-target")
        collapseDiv.forEach(el => {
            if (target == el.getAttribute("data-id")) {
                el.classList.toggle("show")
            }
        })
    })
}