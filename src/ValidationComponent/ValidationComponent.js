import React from 'react';

const ValidationComponent = (props) => {

    let validation_msg = '';

    if (props.length <= 5) {
        validation_msg = 'Text entered needs to be at least 5 characters :(';
    } else {
        validation_msg = 'That looks like a great username :)';
    }

    return (
        <p className={ props.length > 5 ? 'success' : '' }>{ validation_msg }</p>
    )
}
 
export default ValidationComponent;