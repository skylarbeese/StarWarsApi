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
        
        persons.setAttribute('class', 'person-div')
        let img = document.createElement('img')
        let name = document.createElement('h1')
        img.setAttribute("class", "image-class")
        name.setAttribute('class', 'name')
        name.textContent = element.name
        let charNum = getLastNumber(element.url)
        img.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        persons.appendChild(name)
        persons.appendChild(img)
        cont.appendChild(persons)
    })

//---------------------------------------------------------------------------------------------------------//
    let imgDiv = document.querySelectorAll('.image-class')


    //let getLastOpenImg;
    //let windowWidth = window.innerWidth



//-----------------------------------------------------//
//--- text ----------------------------------------------------------------------//

const imgs = people.filter(per => per.url === `https://swapi.co/api/people/22/`) 
       

 


imgDiv.forEach(el => {
el.addEventListener('click', (event) => {
    console.log(el.src)
    windowImg(imgs)
})  
})

function windowImg(newDivs) {
newDivs.forEach(el => {
   // el.addEventListener('click', function() {
 
       
       // getLastOpenImg = index + 1;

        let container = document.body
        let conDiv = document.createElement('div')
        let newImgWindow = document.createElement('div')
        let name = document.createElement('h2')
        let dOb = document.createElement('h2')
        let eyeColor = document.createElement('h2')
        let hairColor = document.createElement('h2')
        let skinColor = document.createElement('h2')
        let gender = document.createElement('h2')

        let name1 = document.createElement('h2')
        let dOb1 = document.createElement('h2')
        let eyeColor1 = document.createElement('h2')
        let hairColor1 = document.createElement('h2')
        let skinColor1 = document.createElement('h2')
        let gender1 = document.createElement('h2')
        
        let nameDiv = document.createElement('div')
        let dObDiv = document.createElement('div')
        let eyeColorDiv = document.createElement('div')
        let hairColorDiv = document.createElement('div')
        let skinColorDiv = document.createElement('div')
        let genderDiv = document.createElement('div')

        name.textContent = el.name
        dOb.textContent = el.birth_year
        eyeColor.textContent = el.eye_color
        hairColor.textContent = el.hair_color
        skinColor.textContent = el.skin_color
        gender.textContent = el.gender
        conDiv.setAttribute('class', 'con-div')
        
        container.appendChild(newImgWindow)
        newImgWindow.setAttribute('class', "img-window")
        newImgWindow.setAttribute('onclick', 'close()')
//-------------------------------------------------------------------//
     let newImg = document.createElement('img')
     let charNum = lastNumber(el.url)
     //-- img ----------------------------------------------------------------------------//
    newImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`   
    console.log(charNum)
    conDiv.appendChild(newImg) 
//-------------------------------------------------------------------//   
   //  let imgNode = el.firstElementChild.cloneNode()
    
   
   nameDiv.appendChild(name1)
   dObDiv.appendChild(dOb1)
   eyeColorDiv.appendChild(eyeColor1)
   hairColorDiv.appendChild(hairColor1)
   skinColorDiv.appendChild(skinColor1)
   genderDiv.appendChild(gender1)
   
   nameDiv.appendChild(name)
   dObDiv.appendChild(dOb)
   eyeColorDiv.appendChild(eyeColor)
   hairColorDiv.appendChild(hairColor)
   skinColorDiv.appendChild(skinColor)
   genderDiv.appendChild(gender)

   conDiv.appendChild(nameDiv)
   conDiv.appendChild(dObDiv)
   conDiv.appendChild(eyeColorDiv)
   conDiv.appendChild(hairColorDiv)
   conDiv.appendChild(skinColorDiv)
   conDiv.appendChild(genderDiv)
 //   conDiv.appendChild(newImg)
     newImgWindow.appendChild(conDiv)
     
    
      
       newImg.classList.add('photo')
       newImg.classList.remove('image-class')
       newImg.setAttribute('class', 'current-img')
 //   })
})
}
function lastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) == '/') {
        start++
    }
    //console.log(end)
    return url.slice(start, end)
 }

 
    } 
    
//--------------------------------------------------------------------------------------------------------//
 


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

    

          

    

    
      

      