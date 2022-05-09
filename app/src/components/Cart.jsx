import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const DIV = styled.div`
border-radius: 6px;
border: 1px solid #dfe3e6;
padding: 20px;
display: flex;
gap:20px;
font-size:12px;`
const IMG = styled.img`
    width:80px;`
const Container = styled.div`
    width:80%;
    margin:40px auto;
    display:flex;
    justify-content:space-between;`
const ItemDiv = styled.div`
    width:60%;
    display:flex;
    flex-direction:column;
    gap:10px;`
const CartValueDiv = styled.div`
    display:flex;
    justify-content:space-between;`
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
const CartValueContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;`
export const Cart = () => {
    let navigate = useNavigate();
    const items = JSON.parse(localStorage.getItem("cart"));
    let sum=0
    items.forEach(element => {
        sum=sum+element.price;
    });
  return (
    <Container>
        <ItemDiv>
        {items.map((elem)=>{
            return <DIV>
                <IMG src={elem.image} alt="image" />
                <div>
                <h6>{elem.title}</h6>
                <strong> ₹ {elem.price}</strong>
                <select>
                    <option value="1">Qty 1</option>
                    <option value="2">Qty 2</option>
                    <option value="3">Qty 3</option>
                    <option value="4">Qty 4</option>
                </select>
                <p>Delivery Today , before 10 pm</p>
                </div>
            </DIV>
        })}
        </ItemDiv>
        <CartValueContainer>
            <strong>Order Summary</strong>
            <div>----------------------------------------</div>
            <CartValueDiv><p>Cart value</p><p>₹  {sum}</p></CartValueDiv>
            <CartValueDiv><strong><span>Amount to be paid</span></strong><span>₹ {sum}</span> </CartValueDiv>
            <StyledButton onClick={()=>navigate("/cart/payment")}>Place Order</StyledButton>
        </CartValueContainer>
    </Container>
  )
}
