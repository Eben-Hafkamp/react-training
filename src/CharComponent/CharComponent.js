import React from 'react';

const CharComponent = (props) => {

    return (
        <div className="CharComponent" onClick={ props.click }>
            <span>{ props.character }</span>
        </div>
    )

}

export default CharComponent;