import { useState } from 'react'
import Card from './components/CardProduct'
import BtnShowCart from './components/BtnShowCart'
import CartModal from './components/CartModal'
import { useSelector } from 'react-redux/es/exports'

export type ProductType = {
  id?: number
  title: string,
  price: number,
  image: string
}

export type ItemType = {
  id: number
  title: string,
  price: number,
  image: string,
  quantity: number
}

export type StateType = {
  products: ProductType[],
  cart: ItemType[]
}

function App() {

  const products = useSelector<StateType, ProductType[]>(state => state.products );
  
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className='app'>
      {
        showModal && <CartModal setShowModal={setShowModal} />
      }
      <BtnShowCart setShowModal={setShowModal} />
      <p className='title'>Here are our products</p>
      <div className="cardContainer">
       {
          products.map(product => <Card product={product} key={product.id} />)
       }
      </div>
    </div>
  )
}

export default App
