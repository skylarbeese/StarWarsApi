import { people } from './data/people.js'

const sec = document.querySelector('section')
const female = document.querySelector('.light')
const male = document.querySelector('.dark')
const other = document.querySelector('.other')
const gal = document.querySelector('.gal')


let con = document.createElement('div')
con.setAttribute('class', 'con')
sec.appendChild(con)

const  cont = document.querySelector('.con')
/*

for(let i = 0; i < people.length; i++) {
    let persons = document.createElement('div')
    let personName = document.createElement('h1')
    let peresonGender = document.createElement('h2')
    let personHair = document.createElement('h2')
    let personEye = document.createElement('h2')
    let birth = document.createElement('h2')
    let img = document.createElement('img')
    img.src = `https://starwars-visualguide.com/assets/img/characters/${i + 1}.jpg`
    personName.textContent = people.name
    peresonGender.textContent = people.gender
    personHair.textContent = people.hair_color
    personEye.textContent = people.eye_color
    birth.textContent = people.birth_year
    persons.appendChild(personName)
    persons.appendChild(img)
    persons.appendChild(peresonGender)
    persons.appendChild(personHair)
    persons.appendChild(personEye)
    persons.appendChild(birth)
    sec.appendChild(persons)
}
*/
/*const maleCharactors = people.filter(person => person.gender === "male")
const femaleCharactors = people.filter(person => person.gender === "female")

/*
male.addEventListener('click', (event) => {

    maleCharactors.forEach(element => {
        let persons = document.createElement('div')
        let img = document.createElement('img')
        let names = document.createElement('h2')
        let charNum = getLastNumber(element.url)
        img.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        names.textContent = element.name
        persons.appendChild(img)
        persons.appendChild(names)
        sec.appendChild(persons)
    })
}) */

const maleCharactors = people.filter(person => person.gender === "male")
const femaleCharactors = people.filter(person => person.gender === "female")
const otherCharactors = people.filter(person => person.gender === "n/a")

male.addEventListener('click', (event) => {
     populateDom(maleCharactors) 
})

female.addEventListener('click', (event) => {
     populateDom(femaleCharactors) 
})
other.addEventListener('click', (event) => {
    populateDom(otherCharactors) 
}) 
    function populateDom(charactors) {
        removeChildren(cont)
       charactors.forEach(element => {
        let persons = document.createElement('div')
        let img = document.createElement('img')
        let names = document.createElement('h2')
        let charNum = getLastNumber(element.url)
        img.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        names.textContent = element.name
        persons.appendChild(img)
        persons.appendChild(names)
        cont.appendChild(persons)
    })
    } 




/*
female.addEventListener('click', (event) => {
    femaleCharactors.forEach(element => {
        let persons = document.createElement('div')
        let img = document.createElement('img')
        let names = document.createElement('h2')
        let charNum = getLastNumber(element.url)
        img.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        names.textContent = element.name
        persons.appendChild(img)
        persons.appendChild(names)
        sec.appendChild(persons)
    })
})
*/
let theUrl = "https://swapi.co/api/people/1/"

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
//console.log(getLastNumber(theUrl))

