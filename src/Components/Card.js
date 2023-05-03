import React from 'react';
import './Card.css';
import myclothing from './myclothing.json';

function Card(props) {
  const { gender } = props;

  const filteredClothing = myclothing.filter(item => item.gender === gender);

  return (
    <div className="row">
      {filteredClothing.map(item => (
        <div className="card" key={item.id}>
          {item.Category && <h2 className='card-header'>{item.Category}</h2>}
          <img className='clothing-img' src={item.image} alt="clothing" />
          <div className='card-body'>
            {item.Size && <p className='card-size'>{item.Size}</p>}
            {item.Color && <p className='card-color'>{item.Color}</p>}
            {item.gender && <p>{item.gender}</p>}
            {item.Price && <p className="card-price">Price: ${item.Price}</p>}
            <button onClick={() => props.onBuyButtonClick(item)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;