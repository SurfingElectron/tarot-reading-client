//Renders 

import React from 'react';
import './CardContainer.css';

//import React components
import CardHeader from '../CardHeader'
import CardHeaderDescription from '../CardHeaderDescription';
import CardImage from '../CardImage';
import CardMeaning from '../CardMeaning';

//Hard coding this for now just to test things
let card = {
    headerText: 'THE FOOL',
    headerDescription: 'One Card Reading',
    cardImage: 'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg',
    imgAlt: 'TestImage',
    cardMeaning: 'To see the The Fool generally means a beginning of a new journey, one where you will be filled with optimism and freedom from the usual constraints in life. When we meet him, he approaches each day as an adventure, in an almost childish way. He believes that anything can happen in life and there are many opportunities that are lying out there, in the world, waiting to be explored and developed. He leads a simple life, having no worries, and does not seem troubled by the fact that he cannot tell what he will encounter ahead.'
};

function CardContainer ({ PROP1, PROP2 }) {
    
    return (
        <div className='card-container'>
            <CardHeader headerText={ card.headerText } />
            <CardHeaderDescription headerDescription={ card.headerDescription } />
            <CardImage imgUrl={ card.cardImage } imgAlt={ card.imgAlt } />
            <CardMeaning cardMeaning={ card.cardMeaning } />
        </div>
    )
}

export default CardContainer; 