function onNavPressed() {
    const linksElement = document.querySelector(".nav-links")
    if (linksElement.getAttribute("toggled")) {
        linksElement.removeAttribute("toggled")
    } else {
        linksElement.setAttribute("toggled", "true")
    }
}