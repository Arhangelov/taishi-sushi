import { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

//Styles
import { 
    Card,
    SetImage,
    SetPrice,
    SetTitle,
    SetPortion,
    CartBtn
} from '../SushiProducts/SushiProductsElements';


function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} /> ;
}

export const  SushiProducts = (props) => {
    const { id, title, imageUrl, portion, price } = props;

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
                <CartBtn>Add to Cart</CartBtn>
            </Card>
        </Tilt>
        </>
    )
}
