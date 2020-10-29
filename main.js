import { films } from './data/films.js'
import { people } from './data/people.js'


//console.log(films.length)


const titles = document.querySelector('.titles')
const movies = document.querySelector('.movies-con')



    
  
    for(let i = 0; i < films.length; i++) {
        let titleCon = document.createElement('div')
        let frontCon = document.createElement('div')
        let backCon = document.createElement('div')
        let box = document.createElement('div')
        let card = document.createElement('div')
        let newTitle = document.createElement('h1')
        let titleCrawl = document.createElement('p')

        titleCon.setAttribute("class", "movie")
        titleCrawl.setAttribute("class", "title-crawl") 
        backCon.setAttribute("class", "back")
        frontCon.setAttribute("class", "front")
        box.setAttribute('class', 'box-crawl')
        card.setAttribute("class", "card")
        let poster = document.createElement('img')
        poster.src = `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`
        poster.setAttribute("class", "movie-img")

        newTitle.textContent = films[i].title 
        titleCrawl.textContent = films[i].opening_crawl
        
      
       

        frontCon.appendChild(poster)
        backCon.appendChild(newTitle)
        //backCon.appendChild(titleCrawl) 
        backCon.appendChild(box)
        box.appendChild(titleCrawl)
        card.appendChild(frontCon)
        card.appendChild(backCon)
        titleCon.appendChild(card)
        movies.appendChild(titleCon)
       
    
    }
    
    
   /* const cardBtn = document.querySelectorAll(".card")

    cardBtn.addEventListener('click', function() {
        if(!this.classList.contains("front-active")) {
           this.classList.remove("back-active");
           this.classList.add("front-active");
           
       } 
        else {
           this.classList.remove("front-active");
           this.classList.add("back-active");
         
       } 
   }) */
        
 




/*
films.forEach(film => {
    let titleCon = document.createElement('div')
    let titleCrawl = document.createElement('p')
    let newTitle = document.createElement('h1') 
    let backCon = document.createElement('div')
    let frontCon = document.createElement('div')
    let crawlBox = document.createElement('div')
   frontCon.setAttribute("class", "front")
    for(let i = 0; i < 7; i++) {
        let poster = document.createElement('img')    
        poster.src = `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`
        poster.setAttribute("class", "movie-img")
        
        titleCon.appendChild(frontCon)
        frontCon.appendChild(poster)
    }
    backCon.appendChild(crawlBox)
    crawlBox.appendChild(titleCrawl)
    crawlBox.setAttribute("class", "box1")
    titleCon.setAttribute("class", "movie")
    titleCrawl.textContent = film.opening_crawl
    newTitle.textContent = film.title
    titleCrawl.setAttribute("class", "title-crawl")
    backCon.setAttribute("class", "back")
    //backCon.appendChild(titleCrawl)
    backCon.appendChild(newTitle)
    titleCon.appendChild(backCon)
   // titleCon.appendChild(newTitle)
   // titleCon.appendChild(titleCrawl)
    movies.appendChild(titleCon)
}) */