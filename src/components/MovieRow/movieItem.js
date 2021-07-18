import React, {useState} from 'react';
import './styles.css';


export default function MovieItem(props){

    const [scrollX, setScrollX]= useState(0);

    function getImage(){
        
    }

    return(
        <div className="movieRow">

                        <div key={key} className="movieRow--item">    
                            <img  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                        </div>
          
        </div>
    );
}