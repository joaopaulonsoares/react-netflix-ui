import axios from 'axios'

const API_KEY = '5f8b3a7e5799e648a5a8f110';
const API_BASE = 'https://moviesamorzinho-a7af.restdb.io/rest/';


const basicFecth = async (endpoint) =>{

// Optionally the request above could also be done as
       const data= await axios.get(endpoint, {
            headers: { 
                'cache-control': 'no-cache',
                'x-apikey': '5f8b3a7e5799e648a5a8f110' 
            }
        })

        return data.data



    //.then(response => response.json())
    //.then(jsondata => console.log(jsondata))

    /*
    var data = (await fetch('https://moviesamorzinho-a7af.restdb.io/rest/movie',{
                method: 'GET',
                mode: "no-cors",
                headers: { 
                    'cache-control': 'no-cache',
                    'x-apikey': '5f8b3a7e5799e648a5a8f110' 
                }
            }
        ))


    console.log("oi")
    console.log(data)



    return data;*/
}

export default {
     getHomeList : async () =>{
        return [
            {
                slug: 'paraAssistir',
                title : "Filmes/Séries para assistir",
                items : await basicFecth(`https://moviesamorzinho-a7af.restdb.io/rest/movie?q={"watched": false}`)
            },
            {
                slug: 'assistidos',
                title : "Filmes/Séries Assistidos",
                items : await basicFecth(`https://moviesamorzinho-a7af.restdb.io/rest/movie?q={"watched": true}`)
            },

        ]
     },

     getMovieInfo : async (movieId, type) =>{
        let info = {};
        if(movieId) {
            switch(type){
                case 'movei':
                    info = await basicFecth(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                 case 'tv':
                    info = await basicFecth(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }

         return info;
     }
}