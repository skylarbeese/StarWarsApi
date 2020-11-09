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
        names.setAttribute('class', 'name-class')
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
        name1.setAttribute('class', "name text")
        dOb1.setAttribute('class', "birth text")
        eyeColor1.setAttribute('class', "eye text")
        hairColor1.setAttribute('class', "hair text")
        skinColor1.setAttribute('class', "skin text")
        gender1.setAttribute('class', "gender text")
       
       
       
       

//--------------------------------------------------------------------------------------------------------// 




//---------------------------------------------------------------------------------------------------------//
        let divCon = document.createElement('div')
        divCon.setAttribute('class', 'text-con')
        
        let divCon1 = document.createElement('div')
        divCon1.setAttribute('class', 'text-con1')

        let divImg = document.createElement('div')
        divImg.setAttribute('class', 'img-con')

        
        let nameDiv = document.createElement('div')
        let dObDiv = document.createElement('div')
        let eyeColorDiv = document.createElement('div')
        let hairColorDiv = document.createElement('div')
        let skinColorDiv = document.createElement('div')
        let genderDiv = document.createElement('div')
        
        let nameDiv1 = document.createElement('div')
        let dObDiv1 = document.createElement('div')
        let eyeColorDiv1 = document.createElement('div')
        let hairColorDiv1 = document.createElement('div')
        let skinColorDiv1 = document.createElement('div')
        let genderDiv1 = document.createElement('div')
      
         
        nameDiv1.setAttribute('class', "text1")
        dObDiv1.setAttribute('class', "text1")
        eyeColorDiv1.setAttribute('class', "text1") 
         hairColorDiv1.setAttribute('class', "text1") 
        skinColorDiv1.setAttribute('class', "text1") 
         genderDiv1.setAttribute('class', "text1") 

        
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
    
  
    
//-------------------------------------------------------------------//   
   //  let imgNode = el.firstElementChild.cloneNode()
    
  

   nameDiv1.appendChild(name1)
   dObDiv1.appendChild(dOb1)
   eyeColorDiv1.appendChild(eyeColor1)
   hairColorDiv1.appendChild(hairColor1)
   skinColorDiv1.appendChild(skinColor1)
   genderDiv1.appendChild(gender1) 
   
   nameDiv.appendChild(name)
   dObDiv.appendChild(dOb)
   eyeColorDiv.appendChild(eyeColor)
   hairColorDiv.appendChild(hairColor)
   skinColorDiv.appendChild(skinColor)
   genderDiv.appendChild(gender)

   divCon.appendChild(nameDiv)
   divCon.appendChild(dObDiv)
   divCon.appendChild(eyeColorDiv)
   divCon.appendChild(hairColorDiv)
   divCon.appendChild(skinColorDiv)
   divCon.appendChild(genderDiv)



   divCon1.appendChild(nameDiv1)
   divCon1.appendChild(dObDiv1)
   divCon1.appendChild(eyeColorDiv1)
   divCon1.appendChild(hairColorDiv1)
   divCon1.appendChild(skinColorDiv1)
   divCon1.appendChild(genderDiv1)

   nameDiv.setAttribute('class', 'text')
   dObDiv.setAttribute('class', 'text')
   eyeColorDiv.setAttribute('class', 'text')
   hairColorDiv.setAttribute('class', 'text')
   skinColorDiv.setAttribute('class', 'text')
   genderDiv.setAttribute('class', 'text')

   conDiv.appendChild(divImg)
   newImgWindow.appendChild(conDiv)
   conDiv.appendChild(divImg) 
    divImg.appendChild(newImg)
    conDiv.appendChild(divCon1)
    conDiv.appendChild(divCon)
    
   //wind.appendChild(newImgWindow)
    
   let win = document.querySelector('.img-window')

   document.querySelector(".name").textContent += " name:";
   document.querySelector(".birth").textContent += " birth year:";
   document.querySelector(".eye").textContent += " eye color:";
   document.querySelector(".hair").textContent += " hair color:";
   document.querySelector(".skin").textContent += " skin color:";
   document.querySelector(".gender").textContent += " gender:";

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

    

          

    

    
      

      