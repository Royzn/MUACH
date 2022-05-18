import react from "react";
import Product from "./Product";
import  TheProducts  from "./data.js";

function createCard(TheProducts) {
    return <Product imageURL={TheProducts.imageURL} />;
    // id={TheProducts.id}
}

const Products = () =>{
    return(
        
        <div className="productContainer">
            {TheProducts.map(createCard)}
        </div>
        
    )
}

export default Products;