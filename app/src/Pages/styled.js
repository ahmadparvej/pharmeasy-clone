import styled from "styled-components";
export const SingleProdGridDiv = styled.div`
    border:1p solid red;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:20px;
    margin:40px auto`
export const ItemDiv = styled.div`
    height:300px;
    padding: 16px 15px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    text-align: left;
    background-color: #fff;
    border-radius: 6px;
    border: 1px solid #dfe3e6;
    `
export const SingleProdCatImg = styled.img`
    width:200px;
    height:50%;
    margin:auto;
    padding:10px;`
export const SingleProdCatH4 = styled.h4`
    font-family:Open sans,sans-serif;
    font-size:16px;
    font-weight:700;
    overflow:hidden;
    `
export const StyledProdCatSpan = styled.span`
    text-decoration:${props => props.secondary ? "line-through" : "none"};
    color:${props => props.secondary ? "grey" : "black"};
    font-size:18px;
    font-family:Open sans;`
export const SingleProdCatTitle = styled.div`
    display:flex;
    justify-content:space-between;`
export const ProductsArea = styled.div`
    width:80%;`
export const StyledSelect = styled.select`
    padding:5px;
    font-size:20px;`
export const Styledform = styled.form`
    display:flex;
    flex-direction:column;
    gap:10px;
    padding:20px;`
export const FilterArea = styled.div`
    width:20%;`
export const StyledContainer = styled.div`
    display:flex;
    width:80%;
    margin:40px auto;
    gap:20px;`
export const StyledProdList = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:10px;
    margin:20px 10%`