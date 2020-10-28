import { people } from './data/people.js'

const sec = document.querySelector('section')
const light = document.querySelector('.light')
const dark = document.querySelector('.dark')
const gal = document.querySelector('.gal')


for(let i = 0; i < 35; i++) {
    let chImg = document.createElement('img')    
   chImg.src = `https://starwars-visualguide.com/assets/img/characters/${i + 1}.jpg`
    chImg.setAttribute("class", "img")
    gal.appendChild(chImg)
    
}

people.forEach(person => {
    let persons = document.createElement('div')
    let personName = document.createElement('h1')
    let peresonGender = document.createElement('h2')
    let personHair = document.createElement('h2')
    let personEye = document.createElement('h2')
    let birth = document.createElement('h2')
    let img = document.createElement('img')
    img.src = "https://starwars-visualguide.com/assets/img/characters/1.jpg"
    personName.textContent = person.name
    peresonGender.textContent = person.gender
    personHair.textContent = person.hair_color
    personEye.textContent = person.eye_color
    birth.textContent = person.birth_year
    persons.appendChild(personName)
    persons.appendChild(img)
    persons.appendChild(peresonGender)
    persons.appendChild(personHair)
    persons.appendChild(personEye)
    persons.appendChild(birth)
    sec.appendChild(persons)
})