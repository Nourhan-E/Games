
import { Ui } from "./Ui.module.js";
import { Details } from "./details.module.js";
export class Home {
    constructor(){
       document.querySelectorAll(".nav-link").forEach((link)=>{

        link.addEventListener("click",()=>{
            this.changeActiveLink(link);
            const category = link.dataset.category;
            this.getGames(category)

        })
       
       })

       this.loading = document.querySelector('.loading')
       this.details = document.getElementById('details')
       this.Games = document.getElementById('Games')
        this.ui = new Ui()
        this.getGames('mmorpg')
    
       

    
}
    changeActiveLink(link){
        document.querySelector(".navbar-nav .active").classList.remove("active")
        link.classList.add("active")

    }

    async getGames(cat){

        this.loading.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9f64b198b0msh2db40ca9e12afcfp1a3fe2jsn6b56550b38a0',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const getApi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options)
        const respons = await getApi.json();
        this.loading.classList.add('d-none')
        console.log(respons)
        this.ui.displayDataGame(respons)


        document.querySelectorAll(".card").forEach(item=>{
            item.addEventListener("click", ()=>{
                this.details.classList.remove('d-none')
                this.Games.classList.add('d-none')
                this.detailsSection = new Details(item.dataset.id)
                
                
            })

        })
        
    }
}