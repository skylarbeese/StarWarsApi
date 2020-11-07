import { starships } from './data/starships.js'
import { vehicles } from './data/vehicles.js'


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

function populateNavVe(vehicles) {
   
    vehicles.forEach(element => {
        let link1 = document.createElement('a')
        link1.href = '#'
          link1.addEventListener('click', event => {
              let veName = event.target.textContent
              const findVe = vehicles.find(ve => ve.name === veName)
              populateShipVe(findVe)
          }) 

          let listItem1 = document.createElement('li')
          listItem1.textContent = element.name
          link1.appendChild(listItem1)
          nav.appendChild(link1)
      

    });
} 


function populateShip(shipData) {
    removeChildren(main)
   let shipDiv = document.createElement('div')
   let shipImg = document.createElement('img')
   let shipName = document.createElement('h2')
   shipName.textContent = shipData.name
   
   shipDiv.setAttribute('class', "ship-con")
   let charNum = getLastNumber(shipData.url)
   shipImg.src = `https://starwars-visualguide.com/assets/img/starships/${charNum}.jpg`
  
  // shipImg.addEventListener('error', shipImg.hidden = true)
   main.appendChild(shipDiv)
   shipDiv.appendChild(shipImg)
   shipDiv.appendChild(shipName)
}

function populateShipVe(veData) {
    removeChildren(main)
   let veDiv = document.createElement('div')
   let veImg = document.createElement('img')
   let veName = document.createElement('h2')
   veName.textContent = veData.name
   
   veDiv.setAttribute('class', "ship-con")
   let charNum = getLastNumber(veData.url)
   veImg.src = `https://starwars-visualguide.com/assets/img/vehicles/${charNum}.jpg`
  
  // shipImg.addEventListener('error', shipImg.hidden = true)
   main.appendChild(veDiv)
   veDiv.appendChild(veImg)
   veDiv.appendChild(veName)
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

 function removeChildren(container) {
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
} 
populateNavVe(vehicles)
populateNav(starships)