import React from 'react';
import './search.css';

function SearchBox({searchChange}) {
    return (
        <div className={'pa2 '}>
            <input className={'pa3 ba b--green bg-lightest-blue search'} type='search' placeholder='Search films' onChange={searchChange}/>
        </div>

    )
}

export default SearchBox;