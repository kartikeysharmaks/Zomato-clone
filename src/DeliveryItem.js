import React from 'react';
import './DeliveryItem.css'

function DeliveryItem({item}) {
    return ( 
         <div>
              <div className='delivery-item-cover'>
                  <img src = {item.cover} alt={item.title} className='delivery-item-image'/>
              </div>
              <div className='delivery-item-name'>{item.name}</div>
        </div>
    )
};

export default DeliveryItem;