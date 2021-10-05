const logo = document.querySelector('#logo_background svg')
const logoBackground = document.querySelector('#logo_background')
const logoParts = logo.querySelectorAll('path')
const logoPart = logo.querySelector('path')



const colorClicked = (bg, fg) => {

    if (logoBackground.style.background == bg && logoPart.style.fill == fg) {
        logoBackground.style.background = fg
        logoParts.forEach(logoPart => logoPart.style.fill = bg)
    } else {
        logoBackground.style.background = bg
        logoParts.forEach(logoPart => logoPart.style.fill = fg)
    }
}