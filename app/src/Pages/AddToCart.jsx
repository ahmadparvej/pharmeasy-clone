import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    display:flex;
    width:80%;
    gap:20px;
    margin:80px auto;`
const StyledImg = styled.img`
    width:100%;`
const ImageDiv = styled.div`
    width:40%;
    border: 1px solid #dfe3e6;
    border-radius: 6px;
    padding:40px;
    background:#fff;`
const DetailDiv = styled.div`
    padding:20px`
const StyledButton = styled.button`
background: #10847e;
color: #fff;
width: auto;
height: 45px;
border-radius: 6px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
border:none;
padding:0 20px`
export const AddToCart = () => {
    let item = JSON.parse(localStorage.getItem("item"));
    let handleAddToCart = ()=>{
        let cart = JSON.parse(localStorage.getItem("cart"))||[];
        cart.push(item);
        localStorage.setItem("cart",JSON.stringify(cart));
    }
  return (
    <Container>
        <ImageDiv>
        <StyledImg src={item.image} alt="" />
        </ImageDiv>
        <DetailDiv>
        <h4>{item.title}</h4>
        <p><span>MRP ₹{item.MRP}</span></p>
        <strong><span> ₹ {item.price}</span></strong>
        <p>Inclusive of all taxes</p>
        <p>Delivery by Tomorrow, before 10 pm</p>
        <StyledButton onClick={handleAddToCart}>Add To Cart</StyledButton>
        </DetailDiv>
    </Container>
  )
}
