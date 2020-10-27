import { films } from './data/films.js'
import { people } from './data/people.js'


//console.log(films.length)


const titles = document.querySelector('.titles')
const movies = document.querySelector('.movies')
films.forEach(film => {
   
  
    let titleCon = document.createElement('div')
    let titleCrawl = document.createElement('p')
    let newTitle = document.createElement('h1') 
  
    for(let i = 0; i < 7; i++) {
      
        let poster = document.createElement('img')    
        poster.src = `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`
        
        titleCon.appendChild(poster)
     
        } 
    
        
        titleCon.appendChild(newTitle)
        titleCon.setAttribute("class", "movie")
        titleCon.appendChild(titleCrawl)
        titleCrawl.textContent = film.opening_crawl
        newTitle.textContent = film.title
        
        movies.appendChild(titleCon)
       
     
    


       
        
})





