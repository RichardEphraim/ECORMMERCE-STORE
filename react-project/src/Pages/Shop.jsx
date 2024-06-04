import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/popular/popular";
import NewCollections from "../Components/NewCollections/NewCollections";
import Offers from "../Components/offers1/offers1";
import Newsletter from "../Components/Newsletter/Newsletter";

const Shop = () => {
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/> 
            <Newsletter/>
            
        </div>
    )
}

export default Shop