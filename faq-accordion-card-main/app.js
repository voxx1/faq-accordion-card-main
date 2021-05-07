const pclass = document.querySelectorAll(".text");
const color = document.querySelectorAll(".title");
const button = document.querySelectorAll(".arrow");
const title = document.querySelectorAll("h3")



const  changeClass = ()=> {
    for (let i = 0; i < button.length; i++) {
        title[i].addEventListener("click", () => {
            pclass[i].classList.toggle("appear")
            color[i].classList.toggle("color")
            button[i].classList.toggle("rotate")

        })
    }
}

changeClass();