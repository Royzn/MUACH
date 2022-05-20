import react from "react";
import Product from "./ProductDress";
import  TheProductsDress  from "./dataDress.js";

function createCard(TheProductsDress) {
    return <Product imageURL={TheProductsDress.imageURL} />;
    // id={TheProducts.id}
}

const ProductsDress = () =>{
    return(
        
        <div className="productContainerDress">
            {TheProductsDress.map(createCard)}
        </div>
        
    )
}

export default ProductsDress;