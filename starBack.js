function addStarFieldElement(el, numStar) {
    el.style.setProperty('background-color', 'black') 
    for(let i = 0; i < numStar; i++) {
        let star = document.createElement('div')
        star.style.setProperty('width', '2px')
        star.style.setProperty('height', '2px')
        star.style.setProperty('background-color', 'white')
        let xy = getRandom()
        star.style.left = `${xy[0]px}`
        star.style.top = `${xy[1]px}`
        element.appendChild('star')
    }
}

function getRandom() {
    let x = document.body.scrollHeight
    let y = document.body.scrollWidth
    let randomY = math.floor(math.random() * y)
    let randomX = math.floor(math.random() * x)
    return(randomY, randomX)
}

addStarFieldElement(document.querySelector('body'), 100)