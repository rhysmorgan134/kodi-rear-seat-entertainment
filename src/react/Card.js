import React from 'react';
import './Card.css';


function Card(props) {
    var file = props.file.split("/")
    file = file[file.length -1]
    return(

        <div className={'flex items-center flex-column br3 pa3 ml5 mr5 mt2 mb2 grow bw2 shadow-5 tc card'} onClick={() => props.playMovie(file)}>
            <div className={'flex flex-row'}>
                <img className='image mr4' alt='noimage' src='http://www.gerdamuller.com.au/wp-content/uploads/2017/07/movie-reel.png'/>
                <div >
                    <h2>title: {file}</h2>
                    <h2>type: {props.filetype}</h2>
                </div>
            </div>
        </div>
    )
}

export default Card;