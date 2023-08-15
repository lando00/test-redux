import ItemCart from "./ItemCart";
import iconClose from "../assets/close_window.svg";
import { Dispatch, SetStateAction, FunctionComponent} from 'react';
import { useSelector } from 'react-redux/es/exports'
import { ItemType, StateType } from "../App";

type Props = {
  setShowModal : Dispatch<SetStateAction<boolean>>
}

const CartModal: FunctionComponent<Props> = ({setShowModal}) => {

  const items = useSelector<StateType, ItemType[]>(state => state.cart);
  
  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  }

  return (
    <div className="cartOverlay">
        <div className="cartModal">
          <img src={iconClose} alt="" className='closeModal' onClick={() => {setShowModal(false)}} />
          
          {
            items.map(item => <ItemCart item={item} key={item.id} />)
          }
          <p>Your total : <span>{getTotalPrice()}$</span></p>
          <button className="checkout">Proceed to Checkout</button>
        </div>
    </div>
  )
}

export default CartModal;