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
      let back = document.querySelectorAll('.back')
        for(let i=0; i < back.length; i++) {
            
            back[0].setAttribute("class", "back back1");
            back[1].setAttribute("class", "back back2");
            back[2].setAttribute("class", "back back3");
            back[3].setAttribute("class", "back back4");
            back[4].setAttribute("class", "back back5");
            back[5].setAttribute("class", "back back6");
            back[6].setAttribute("class", "back back7");
           
        } 
    let front = document.querySelectorAll('.front')
    for(let i=0; i < front.length; i++) {
            
        front[0].setAttribute("class", "front front1");
        front[1].setAttribute("class", "front front2");
        front[2].setAttribute("class", "front front3");
        front[3].setAttribute("class", "front front4");
        front[4].setAttribute("class", "front front5");
        front[5].setAttribute("class", "front front6");
        front[6].setAttribute("class", "front front7");
       
    }
    let card = document.querySelectorAll('.card')
    for(let i=0; i < card.length; i++) {
            
        card[0].setAttribute("class", "card card1");
        card[1].setAttribute("class", "card card2");
        card[2].setAttribute("class", "card card3");
        card[3].setAttribute("class", "card card4");
        card[4].setAttribute("class", "card card5");
        card[5].setAttribute("class", "card card6");
        card[6].setAttribute("class", "card card7");
       
    }
    let movie = document.querySelectorAll('.movie')
    for(let i=0; i < card.length; i++) {
            
        movie[0].setAttribute("class", "movie movie1");
        movie[1].setAttribute("class", "movie movie2");
        movie[2].setAttribute("class", "movie movie3");
        movie[3].setAttribute("class", "movie movie4");
        movie[4].setAttribute("class", "movie movie5");
        movie[5].setAttribute("class", "movie movie6");
        movie[6].setAttribute("class", "movie movie7");
       
    }
   const card1 = document.querySelector('.card1')
   const card2 = document.querySelector('.card2')
   const card3 = document.querySelector('.card3')
   const card4 = document.querySelector('.card4')
   console.log(card1)
    card1.addEventListener('click', function() {
        if(!this.classList.contains("front-active")) {
           this.classList.remove("back-active");
           this.classList.add("front-active");
           
       } 
        else {
           this.classList.remove("front-active");
           this.classList.add("back-active");
         
       } 
   }) 

    card2.addEventListener('click', function() {
        if(!this.classList.contains("front-active")) {
           this.classList.remove("back-active");
           this.classList.add("front-active");
           
       } 
        else {
           this.classList.remove("front-active");
           this.classList.add("back-active");
         
       } 
   }) 
     
 




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