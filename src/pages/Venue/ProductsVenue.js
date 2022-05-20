import react from "react";
import ProductVenue from "./ProductVenue";
import TheProductsVenue  from "./dataVenue.js";

function createCard(TheProductsVenue) {
    return <ProductVenue imageURL={TheProductsVenue.imageURL} />;
    // id={TheProducts.id}
}

const ProductsVenue = () =>{
    return(
        
        <div className="productContainerVenue">
            {TheProductsVenue.map(createCard)}
        </div>
        
    )
}

export default ProductsVenue;