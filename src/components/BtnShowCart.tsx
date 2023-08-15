import { Dispatch, SetStateAction, FunctionComponent } from 'react';
import iconCart from '../assets/shopping_cart.svg';
import { ProductType, StateType } from '../App';
import { useSelector } from 'react-redux/es/hooks/useSelector';

type Props = {
    setShowModal : Dispatch<SetStateAction<boolean>>
}

const BtnShowCart: FunctionComponent<Props> = ({setShowModal}) => {
  const itemCart = useSelector<StateType, ProductType[]>(state => state.cart); 
  return (
    <button className='cart' onClick={() => setShowModal(true)}>
        <img src={iconCart} />
        View your cart : {itemCart.length}
    </button>
  )
}

export default BtnShowCart;