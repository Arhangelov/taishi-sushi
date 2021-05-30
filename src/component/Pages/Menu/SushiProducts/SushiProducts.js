import React from 'react';
import { 
    Cart,
    SetImage,
    SetPrice,
    SetTitle,
    SetPortion,
    CartBtn
} from '../SushiProducts/SushiProductsElements';

export const  SushiProducts = (props) => {
    const { id, title, imageUrl, portion, price } = props

    return (
        <> 
            <Cart to={`/menu/details/${id}`}>
                <SetImage src={`${imageUrl}`} alt={`${title}`} />
                <SetPrice>{`${price}`}</SetPrice>
                <SetTitle> {`${title}`} </SetTitle>
                <SetPortion>{`${portion}`}</SetPortion>
                <CartBtn>Add to Cart</CartBtn>
            </Cart>   
        </>
    )
}
