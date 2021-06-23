import { useContext, useEffect, useState } from 'react'
//Styles
import { Container, CartContainer } from './CartElements';
//Component
import CartProducts from './CartProducts/CartProducts';
//Service
import { getUserCart } from '../../../services/sushiService';
//Context
import { Context } from "../../../Context/UserContext";

const Cart = () => {
    const [user, setUser] = useContext(Context);
    const [cart, setCart] = useState([])

    //Getting user cart array
    useEffect(() => {
        getUserCart(user._id)
          .then(res => setCart(res))
          .catch((error) => console.log(error.message));
    },[]);

    const title = cart.map((sushi) => sushi.price);
    console.log(title)

    return (
      <CartContainer>
        <Container>
          {cart.map((sushi) => 
                <CartProducts 
                    key={sushi._id}
                    imageUrl={sushi.imageUrl}
                    title={sushi.title} 
                    portion={sushi.portion}
                    price={sushi.price}
                    />
          )}
        </Container>
      </CartContainer>
    )
}

export default Cart
