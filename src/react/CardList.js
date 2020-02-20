import React from 'react';
import Card from "./Card";


function CardList({films, playMovie}) {
    const cardComponent = films.map((film, i) => {
        return <Card file={films[i].file} filetype={films[i].filetype} playMovie={playMovie}/>
    })
    return(
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList;