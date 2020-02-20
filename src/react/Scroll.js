import React from 'react';

function Scroll(props) {
    return (
        <div style={{overflow: 'scroll', border: '1px solid black', height:'480px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;