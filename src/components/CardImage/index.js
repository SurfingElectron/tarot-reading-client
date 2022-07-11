import React from 'react';
//import './NAME.css';

function CardImage({ imageUrl, imageAlt }) {
    return (
        <img src={ imageUrl } alt={ imageAlt } />
    )
}

export default CardImage; 