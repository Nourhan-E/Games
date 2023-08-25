import { Ui } from "./Ui.module.js"

export class Details {
    constructor(id){
        document.getElementById("btnClose").addEventListener("click", ()=>{

            document.getElementById("details").classList.add('d-none')
            document.getElementById("Games").classList.remove('d-none')
        })

        this.loading = document.querySelector('.loading')
        this.getDetails(id)
      
    }

   async getDetails(id){
    
    this.loading.classList.remove("d-none")
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9f64b198b0msh2db40ca9e12afcfp1a3fe2jsn6b56550b38a0',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

    const getApi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` , options)
    const respons = await getApi.json()
    this.loading.classList.add("d-none")
    console.log(respons)
    new Ui().displayDetails(respons)

    }

}