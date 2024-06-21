import React, { useContext }from "react";
import { Shopcontext } from "../Context/Shopcontext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/breadcrums";
import Productdisplay from "../Components/Productdisplay/productdisplay";
import Descriptionbox from "../Components/descriptionbox/descriptionbox";
import Relatedproducts from "../Components/relatedproducts/relatedproducts";




const Product = () => {
    const {all_product}= useContext(Shopcontext);
    const {productId}= useParams();
    const product = all_product.find((e)=> e.id === Number(productId));

    return(
        <div>
            <Breadcrum product={product} />
            <Productdisplay product={product} />
            <Descriptionbox/>
            <Relatedproducts/>
        </div>
    )
}

export default Product