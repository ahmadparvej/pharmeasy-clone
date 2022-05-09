import React from 'react'
import { useNavigate } from "react-router-dom";
import { ItemDiv, SingleProdCatImg ,SingleProdCatH4,StyledProdCatSpan} from "./styled";
export const Product = (elements) => {
    const navigate = useNavigate();
    return (
            <ItemDiv onClick={() => { localStorage.setItem("item", JSON.stringify(elements)); navigate("/addtocart") }}>
                <SingleProdCatImg src={elements.image} alt="" />
                <SingleProdCatH4>{elements.title}</SingleProdCatH4>
                <p>MRP <StyledProdCatSpan secondary>₹{elements.MRP}</StyledProdCatSpan></p>
                <strong><StyledProdCatSpan primary>₹{elements.price}</StyledProdCatSpan></strong>
            </ItemDiv>
    )
}
