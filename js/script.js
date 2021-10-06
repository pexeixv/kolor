const logo = document.querySelector('#logo_background svg')
const logoBackground = document.querySelector('#logo_background')
const logoParts = logo.querySelectorAll('path')
const logoPart = logo.querySelector('path')

const hexToRgb = hex => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    const r = parseInt(result[1], 16)
    const g = parseInt(result[2], 16)
    const b = parseInt(result[3], 16)
    return result ? `rgb(${r}, ${g}, ${b})` : null
}

const colorClicked = (bg, fg) => {
    if (logoBackground.style.background == hexToRgb(bg) && logoPart.style.fill == hexToRgb(fg)) {
        logoBackground.style.background = fg
        logoParts.forEach(logoPart => logoPart.style.fill = bg)
    } else {
        logoBackground.style.background = bg
        logoParts.forEach(logoPart => logoPart.style.fill = fg)
    }
}