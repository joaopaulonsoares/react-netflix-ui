import React, {useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () =>{

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData]= useState(null);
  const [blackHeader, setblackHeader]= useState(false);

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      console.log(list)
       await setMovieList(list);
       console.log(movieList)
  

      let originals = list.filter(i=> i.slug === 'paraAssistir');
      let randonChosen = Math.floor(Math.random() * (originals[0].items.length - 1));
      let chosen = originals[0].items[randonChosen]
      setFeaturedData(chosen);
    }

    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () =>{
        if(window.scrollY > 10){
          setblackHeader(true);
        }else{
          setblackHeader(false);
        }
    }

    window.addEventListener('scroll', scrollListener);

    return () =>{
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return(
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item ={featuredData}/>
      }

      <section className="lists">
        {movieList.map((item, key) =>(
          <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
        ))

        }
      </section>



    {movieList.length <= 0 &&
      <div className="loading">
        <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading"></img>
      </div>
    }
    </div>
  )
}



// https://youtu.be/tBweoUiMsDg?t=8054