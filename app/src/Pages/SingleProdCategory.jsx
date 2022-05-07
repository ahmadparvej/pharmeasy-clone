import React from 'react'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

const SingleProdGridDiv = styled.div`
    width:70%;
    border:1p solid red;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:20px;
    margin:40px auto`
const ItemDiv = styled.div`
    padding: 16px 15px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    text-align: left;
    background-color: #fff;
    border-radius: 6px;
    border: 1px solid #dfe3e6;
    `
const SingleProdCatImg = styled.img`
    width:50%;
    height:180px;
    margin:auto;
    padding:10px;`
const SingleProdCatH4 = styled.h4`
    font-family:Open sans,sans-serif;
    font-size:20px;
    font-weight:700;`
const StyledProdCatSpan = styled.span`
    text-decoration:${props => props.secondary ? "line-through" : "none"};
    color:${props => props.secondary ? "grey" : "black"};
    font-size:18px;
    font-family:Open sans;`
export const SingleProdCategory = () => {
    const { id } = useParams()
    const { data } = useSelector((state) => state.getDataReducer);
    const [prods, setProds] = React.useState([]);
    const [val, setVal] = React.useState("");
    React.useEffect(() => {
        let newData;
        data.filter((elem) => {
            if (elem.id === Number(id)) {
                newData = elem.items
                return elem.items;
            }
        })
        setProds(newData)
    }, [])
    let handleSelectSort = (e) => {
        setVal(e.target.value);
        switch (e.target.value) {
            case "ltoh":
                setProds(prods.sort((a, b) => {
                    return a.price - b.price;
                }))
                break;
            case "htol":
                setProds(prods.sort((a, b) => {
                    return b.price - a.price;
                }))
                break;
            default:
                    let newArr;
                    data.forEach(element => {
                    if(element.id===Number(id)){
                        newArr=element.items
                        return;
                    }
                    })
                    setProds(newArr)
                break;
        }

    }
    return (
        <div>
            <div>
                <select name="productrs" onChange={handleSelectSort} value={val}>
                    <option value=""></option>
                    <option value="populer">Populer</option>
                    <option value="ltoh">Low to High</option>
                    <option value="htol">High to Low</option>
                </select>
            </div>
            <SingleProdGridDiv>{prods.map((elements) => {
                return <ItemDiv key={elements.id}>
                    <SingleProdCatImg src={elements.image} alt="" />
                    <SingleProdCatH4>{elements.title}</SingleProdCatH4>
                    <p>MRP <StyledProdCatSpan secondary>₹{elements.MRP}</StyledProdCatSpan></p>
                    <strong><StyledProdCatSpan primary>₹{elements.price}</StyledProdCatSpan></strong>
                </ItemDiv>
            })}</SingleProdGridDiv>
        </div>
    )
}
