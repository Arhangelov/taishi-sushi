import React from 'react'
//Styles
import { Product, ProductImg, ProductTitle, ProductPortion, ProductPrice, ProductButton } from './CartProductsEl';
//Delete Icon
import { TiDeleteOutline } from 'react-icons/ti';

const CartProducts = (props) => {
    const { title, imageUrl, portion, price } = props;
    return (
        <Product>
            <ProductImg src={`${imageUrl}`}/>
            <ProductTitle>{`${title}`}</ProductTitle>
            <ProductPortion>{`${portion}`}</ProductPortion>
            <ProductPrice>{`${price}`}</ProductPrice>
            <ProductButton> <TiDeleteOutline /> </ProductButton>
        </Product>
    )
}

export default CartProducts
