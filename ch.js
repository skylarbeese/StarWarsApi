import { people } from './data/people.js'

const sec = document.querySelector('section')
const female = document.querySelector('.female')
const male = document.querySelector('.male')
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
        let link = document.createElement('a')
        link.href = '#'

        let names = document.createElement('h1')
          names.addEventListener('click', event => {
              let names = event.target.textContent
              const findPer = people.find(per => per.name === names)
              windowImg(findPer)
          }) 
        let img = document.createElement('img')
        
        img.setAttribute("class", "image-class")
        names.setAttribute('class', 'name')
        names.textContent = element.name
      
        let charNum = getLastNumber(element.url)
        img.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        link.appendChild(names)
        persons.appendChild(link)
        persons.appendChild(img)
        cont.appendChild(persons)
    })
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
//---------------------------------------------------------------------------------------------------------//
 //const wind = document.querySelector('.window')

//------------------------------------------------------------------------------------------------//
function windowImg(newDivs) {
//newDivs.forEach(el => {
   // el.addEventListener('click', function() {
        let container = document.body
        let conDiv = document.createElement('div')
        let newImgWindow = document.createElement('div')


 
//----------div -------------------------------------------------------------------------------------------//
        let name1 = document.createElement('h2')
        let dOb1 = document.createElement('h2')
        let eyeColor1 = document.createElement('h2')
        let hairColor1 = document.createElement('h2')
        let skinColor1 = document.createElement('h2')
        let gender1 = document.createElement('h2')
         
        conDiv.setAttribute('class', 'con-div')
        name1.setAttribute('class', "name")
        dOb1.setAttribute('class', "birth")
        eyeColor1.setAttribute('class', "eye")
        hairColor1.setAttribute('class', "hair")
        skinColor1.setAttribute('class', "skin")
        gender1.setAttribute('class', "gender")

//--------------------------------------------------------------------------------------------------------// 
/*const nameClass = document.querySelector('.name')
const birthClass = document.querySelector('.birth')
const eyeClass = document.querySelector('.eye')
const hairClass = document.querySelector('.hair')
const skinClass = document.querySelector('.skin')
const genderClass = document.querySelector('.gender')

nameClass.innerText = 'name:'
birthClass.innerText = 'birth year:'
eyeClass.innerText = 'eye color:'
hairClass.innerText = 'hair color:'
skinClass.innerText = 'skin color:'
genderClass.innerText = 'gender:' */



//---------------------------------------------------------------------------------------------------------//
        let nameDiv = document.createElement('div')
        let dObDiv = document.createElement('div')
        let eyeColorDiv = document.createElement('div')
        let hairColorDiv = document.createElement('div')
        let skinColorDiv = document.createElement('div')
        let genderDiv = document.createElement('div')
        
      
        
//------array div info-------------------------------------------------------------------------------------------//
        let name = document.createElement('h2')
        let dOb = document.createElement('h2')
        let eyeColor = document.createElement('h2')
        let hairColor = document.createElement('h2')
        let skinColor = document.createElement('h2')
        let gender = document.createElement('h2')

        name.textContent = newDivs.name
        dOb.textContent = newDivs.birth_year
        eyeColor.textContent = newDivs.eye_color
        hairColor.textContent = newDivs.hair_color
        skinColor.textContent = newDivs.skin_color
        gender.textContent = newDivs.gender
 
//------------------------------------------------------------------------------------------------//
        container.appendChild(newImgWindow)
        newImgWindow.setAttribute('class', "img-window")
        newImgWindow.setAttribute('onclick', 'closeWindow()')
//-------------------------------------------------------------------//
     let newImg = document.createElement('img')
    
     let charNum1 = LastNumber(newDivs.url)
     newImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum1}.jpg`
     //-- img ----------------------------------------------------------------------------//
    
  
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
   newImgWindow.appendChild(conDiv)
   //wind.appendChild(newImgWindow)
    
   let win = document.querySelector('.img-window')



  win.addEventListener('click', (event) => {
       closeWindow(event)
  })
      
   // })
//})
}



function LastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) == '/') {
        start++
    }
    //console.log(end)
    return url.slice(start, end)
 }




function closeWindow() {
    document.querySelector('.img-window').remove()
}















 // onclick get url num and give it to newImg url --------------------------------------//


 
     
    
//--------------------------------------------------------------------------------------------------------//





//------------------------------------------------------------------------------------------------------------//

    

          

    

    
      

      