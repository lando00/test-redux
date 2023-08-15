import { ItemType } from '../App'
import {FunctionComponent} from "react"
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { deleteItem, updateItem } from '../redux';

type Props = {
    item: ItemType
}

const ItemCart: FunctionComponent<Props> = ({item}) => {

    const dispatch = useDispatch();

  return (
    <div className='itemCart'>
        <img src={item.image} alt=""/>
        <p>{item.title}</p>
        <select name="" id="" value={item.quantity} onChange={(e) => {dispatch(updateItem({id: item.id, quantity: Number(e.target.value)}))}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
        <button onClick={() => {dispatch(deleteItem(item.id))}}>Remove from cart</button>
    </div>
  )
}

export default ItemCart