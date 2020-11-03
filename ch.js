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

populateDom(people)

const maleCharactors = people.filter(person => person.gender === "male" || person.gender === "hermaphrodite")
const femaleCharactors = people.filter(person => person.gender === "female")
const otherCharactors = people.filter(person => person.gender === "n/a" || person.gender === "none")

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
        let card = document.createElement('div')
        let front = document.createElement('div')
        let back = document.createElement('div')
        card.setAttribute('class', 'card')
        front.setAttribute('class', 'front')
        back.setAttribute('class', 'back')
        persons.setAttribute('class', 'person-div')
        let img = document.createElement('img')
        img.setAttribute("class", "image-class")
        let names = document.createElement('h2')
        let charNum = getLastNumber(element.url)
        img.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        names.textContent = element.name
        front.appendChild(img)
        back.appendChild(names)
        card.appendChild(front)
        card.appendChild(back)
        persons.appendChild(card)
        
        cont.appendChild(persons)
    })
    let imgDiv = document.querySelectorAll('.person-div')
let getLastOpenImg;
let windowWidth = window.innerWidth

imgDiv.forEach((imgs) => {
    imgs.onclick = function() {
       // alert('working')
        console.log('working')
       // getLastOpenImg = index + 1;

        let container = document.body
        let newImgWindow = document.createElement('div')
        container.appendChild(newImgWindow)
        newImgWindow.setAttribute('class', "img-window")
        newImgWindow.setAttribute('onclick', 'close()')
    }
})

function close() {
	//alert('working')
   document.querySelector('.img-view').remove()

   newImageWindow.classList.add('img-view-active')
  
} 
    } 
    



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

//------------------------------------------------------------------------------------------------------------//

    

          

    

    
      

      