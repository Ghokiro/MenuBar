document.addEventListener("DOMContentLoaded", () => {
    funciones()
})

function funciones() {
    Menu()
}

function Menu() {
    const menu = document.getElementById('menu');  
    const btns = document.querySelectorAll("#menu-items a")

    menu.addEventListener("mouseenter", () => {
        btns.forEach(btn => {
            btn.classList.add("show")
        });
    })
    menu.addEventListener("mouseleave", () => {
        btns.forEach(btn => {
            btn.classList.remove("show")
        });
    })

}