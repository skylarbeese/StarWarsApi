import { starships } from './data/starships.js'

const ship = document.querySelector('nav')
const nav = document.querySelector('ul')
const main = document.querySelector('main')

function populateNav(starships) {
    starships.forEach(element => {
        let link = document.createElement('a')
        link.href = '#'
          link.addEventListener('click', event => {
              let shipName = event.target.textContent
              const findShip = starships.find(ship => ship.name === shipName)
              populateShip(findShip)
          }) 

          let listItem = document.createElement('li')
          listItem.textContent = element.name
          link.appendChild(listItem)
          nav.appendChild(link)
          ship.appendChild(nav)

    });
}



function populateShip(shipData) {
   let shipDiv = document.createElement('div')
   let shipImg = document.createElement('img')
   let shipName = document.createElement('h2')
   shipName.textContent = shipData.name
   
   let charNum = getLastNumber(shipData.url)
   shipImg.src = `https://starwars-visualguide.com/assets/img/starships/${charNum}.jpg`
  
  // shipImg.addEventListener('error', shipImg.hidden = true)
   main.appendChild(shipDiv)
   shipDiv.appendChild(shipImg)
   shipDiv.appendChild(shipName)
}

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) == '/') {
        start++
    }
    //console.log(end)
    return url.slice(start, end)
 }


populateNav(starships)