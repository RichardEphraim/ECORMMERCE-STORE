import React from 'react'
import './relatedproducts.css'
import data_products from '../Assets/data'
import Item from '../Items/Items'

const Relatedproducts = () => {
    return(
        <div className='relatedproduct'>
        
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproduct-item">
        {data_products.map((item,i) =>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price }/>

        })}
        </div>
        </div>
    )
}

export default Relatedproducts