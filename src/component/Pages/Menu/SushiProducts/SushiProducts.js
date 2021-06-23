import { useRef, useEffect, useContext } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { pushToCart } from '../../../../services/sushiService';

//Context
import{ useDispatchCart } from '../../../../Context/CartContext';
import { Context } from "../../../../Context/UserContext";

//Styles
import { 
    Card,
    SetImage,
    SetPrice,
    SetTitle,
    SetPortion,
    CartBtn
} from '../SushiProducts/SushiProductsElements';

//Tilt
function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} /> ;
}

//Component
export const  SushiProducts = (props) => {
    const { id, title, imageUrl, portion, price } = props;
    const [user, setUser] = useContext(Context);

    const dispatch = useDispatchCart();

    const addToCart = (sushi, userId) => {
        dispatch({ type: 'ADD', sushi})
        pushToCart(sushi, userId)
            .then(response => console.log(response))
    };

    const options = {
        scale: 1.2,
        speed: 1000,
        max: 15
    };

    return (
        <> 
        <Tilt options={options}>
            <Card to={`/menu/details/${id}`}>
                <SetImage src={`${imageUrl}`} alt={`${title}`} />
                <SetPrice>{`${price}`}</SetPrice>
                <SetTitle> {`${title}`} </SetTitle>
                <SetPortion>{`${portion}`}</SetPortion>
            </Card>
                <CartBtn onClick={() => addToCart(props, user._id)}>Add to Cart</CartBtn>
        </Tilt>
        </>
    )
}
