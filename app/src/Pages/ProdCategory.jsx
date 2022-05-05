import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
const CategoryDiv = styled.div`
    display:flex;
    justify-content:space-around;
    padding:20px;
    display: inline-flex;
    align-items: center;
    border: 1px solid #dfe3e6;
    margin: 7.5px 15px 7.5px 0;
    border-radius: 6px;
    background: #fff;
    font-family: 'Open Sans', sans-serif;
    cursor:pointer;
    `
const StyledImg = styled.img`
    width:20%`
const Styledh2 = styled.h2`
    width:50%;
    font-size:15px;
    color:grey;`
const StyledP = styled.p`
    color: #16876e;
    font-size: 14px;
    text-align: right;
    font-weight:bold`

export const ProdCategory = ({item}) => {
    const navigate = useNavigate();
    return (
        <div>
            <CategoryDiv >
                <StyledImg src={item.img} alt={item.categoryName}></StyledImg>
                <Styledh2>{item.categoryName}</Styledh2>
                <StyledP>Upto {item.offer}% off</StyledP>
            </CategoryDiv>
        </div>
    )
}
