import React from 'react'
import { getData } from '../Redux/Products/Action'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { nanoid } from 'nanoid'

const StyledProdList = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:10px;
    margin:0 10%;`
const CategoryDiv = styled.div`
    display:flex;
    justify-content:space-between;
    padding:10px;
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
    width:80px`
const Styledh2 = styled.h2`
    font-size:16px;
    color:grey;`
const StyledP = styled.p`
    color: #16876e;
    font-size: 14px;
    text-align: right;
    font-weight:bold`
export const HealthCareProducts = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state);
    React.useEffect(() => {
        dispatch(getData())
    }, [dispatch])
    return (
        <div>
            <h2>PharmEasy.com</h2>
            <StyledProdList>
                {data.map((item) => {
                    return (
                        <CategoryDiv key={nanoid()}> 
                            <StyledImg src={item.img} alt={item.categoryName}></StyledImg>
                            <Styledh2>{item.categoryName}</Styledh2>
                            <StyledP>Upto {item.offer}% off</StyledP>
                        </CategoryDiv>
                    )
                })}
            </StyledProdList>
        </div>
    )
}

