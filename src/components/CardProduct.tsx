import {FunctionComponent} from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addItem } from "../redux";

type Product = {
    title: string,
    price: number,
    image: string
}

type Props ={
    product :  Product
}

const Card : FunctionComponent<Props> = ({product}) => {

    const dispatch = useDispatch();

    return (
       <div className="card">
            <img src={product.image} alt="" />
            <div>
                <p className="title">{product.title}</p>
                <p className="price">{product.price}$</p>
            </div>
            <button onClick={() => dispatch(addItem({...product, quantity: 1}))} >Add to cart</button>
       </div> 
    )
}

export default Card;