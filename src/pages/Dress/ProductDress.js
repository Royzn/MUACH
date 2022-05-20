import react from "react";
import TheProducts from "./dataDress";


function ProductDress (props) {
    return (
        <div className="productContDress">
     
            <img src={props.imageURL} alt="Product"/>
            <h2>{props.id}</h2>
      
        </div>
    )
}

export default ProductDress;