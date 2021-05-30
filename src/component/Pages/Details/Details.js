import { useEffect, useState } from 'react';
import { getSushiDetails } from '../../../services/sushiService';

import {
    Container,
    SushiImg,
    SushiTitle,
    SushiDesc,
    SushiPortion,
    CartBtn
} from './DetailsElements';

export const Details = ({ match }) => {
    const sushiId = match.params.id;
    const [sushi, setSushi] = useState([]);

    useEffect(() => {
        getSushiDetails(sushiId)
            .then(res => {console.log(res); setSushi(res)})
            .catch(error => console.log(error.message));
    },[])
    return (
        <>
        <Container>
            <SushiImg src={`${sushi.imageUrl}`} alt="Sushi Image" />
            <SushiTitle>{`${sushi.title}`}</SushiTitle>
            <SushiDesc>{`${sushi.description}`}</SushiDesc>
            <SushiPortion>{`${sushi.portion}`}</SushiPortion>
            <CartBtn>Add to Cart</CartBtn>
        </Container>

        </>
    )
}

export default Details;