import React from 'react';
import './Card.css';
import CardItem from './CardItems';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='...................................................'
              label='.....'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='................................................'
              label='......'
              path='/services'
            />
            <CardItem
              src='images/img-3.jpg'
              text='................................................'
              label='......'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='..................................................'
              label='......'
              path='/contact-us'
            />
            <CardItem
              src='images/img-8.jpg'
              text='................................................'
              label='.....'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
