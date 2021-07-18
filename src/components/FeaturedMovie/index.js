import React from 'react';
import './styles.css';

export default ({item}) => {


    let descr = item.description;
    if(descr.length > 200){
        descr = descr.substring(0, 200)  + '...';
     }


    return (
        <section className="featured" style={{
            backgroundPosition: 'center',
            backgroundImage: `url(${item.poster_url})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.title}</div>
                    <div className="featured--info">
    
                    </div>
                        <div className="featured--description">{descr}</div>
                        <div className="featured--buttons">
                            <a href={`/watch/${item.id}`} className="featured--watchbutton">► Assistir</a>
                            <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>
                        </div>
                        <div className="featured--genres">Gêneros: <strong> {item.gender} </strong></div>

                </div>
            </div>
       
        </section>
    )
}
