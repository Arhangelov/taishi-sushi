import styled from 'styled-components';

export const Product = styled.div`
    display: grid;
    grid-template-columns: .10fr .45fr .25fr .25fr .05fr;
    grid-template-rows: .25fr;
    height:100%;
    width: 100%;
    padding: .5%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid lightgoldenrodyellow;
    color: black;
    place-items: center center;

`

export const ProductImg = styled.img`
    align-self: center;
    max-width: 100%;
    max-height: 6vh;
    border-radius: 9px;
`;

export const ProductTitle = styled.p`
    font-weight: 600;
    font-size: 1rem;
    font-style: italic;
`;

export const ProductPortion = styled.p`
    font-size: 1rem;
`;

export const ProductPrice = styled.p`
    font-weight: 600;
    font-size: 1rem;
`;

export const ProductButton = styled.button`
    font-size: 2rem;
    border: none;
    background-color: transparent;

    :hover {
        cursor: pointer;
    }

    svg:hover {
        border-radius: 1rem;
        color: darkred;
    }
    
`;