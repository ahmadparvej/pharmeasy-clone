import React from 'react'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const SingleProdGridDiv = styled.div`
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
    max-height:200px;
    margin:auto;
    padding:10px;`
const SingleProdCatH4 = styled.h4`
    font-family:Open sans,sans-serif;
    font-size:16px;
    font-weight:700;
    `
const StyledProdCatSpan = styled.span`
    text-decoration:${props => props.secondary ? "line-through" : "none"};
    color:${props => props.secondary ? "grey" : "black"};
    font-size:18px;
    font-family:Open sans;`
const SingleProdCatTitle = styled.div`
    display:flex;
    justify-content:space-between;`
const ProductsArea = styled.div`
    width:80%;`
const StyledSelect = styled.select`
    padding:5px;
    font-size:20px;`
const Styledform = styled.form`
    display:flex;
    flex-direction:column;
    gap:10px;
    padding:20px;`
const FilterArea = styled.div`
    width:20%;`
const StyledContainer = styled.div`
    display:flex;
    width:80%;
    margin:40px auto;
    gap:20px;`
export const SingleProdCategory = () => {
    const { id } = useParams()
    const { data } = useSelector((state) => state.getDataReducer);
    const [prods, setProds] = React.useState([]);
    const [heading, setHeading] = React.useState("Products");
    const [val, setVal] = React.useState(0);
    const [priceLimit,setPriceLimit] = React.useState(900000000);
    const navigate = useNavigate()
    React.useEffect(() => {
        let newData;
        data.filter((elem) => {
            if (elem.id === Number(id)) {
                newData = elem.items;
                setHeading(elem.categoryName)
                return elem.items;
            }
        })
        setProds(newData)
    }, [])
    return (
        <StyledContainer>
            <FilterArea>
                <h3>Filter</h3>
                <hr />
                <div>
                    <h4>Price</h4>
                    <Styledform onChange={(e)=>setPriceLimit(e.target.value)}>
                        <div>
                        <input type="radio" id="below99" name="price" value="99"/>
                        <label htmlFor="below99">Below 99</label>
                        </div>
                        <div>
                        <input type="radio" id="below199" name="price" value="199"/>
                        <label htmlFor="below199">0 - 199</label>
                        </div>
                        <div>
                        <input type="radio" id="below299" name="price" value="299"/>
                        <label htmlFor="below299">0 - 299</label>
                        </div>
                        <div>
                        <input type="radio" id="below499" name="price" value="499"/>
                        <label htmlFor="below499">0 - 499</label>
                        </div>
                        <div>
                        <input type="radio" id="below999" name="price" value="999"/>
                        <label htmlFor="below299">0 - 999</label>
                        </div>
                    </Styledform>
                </div>
            </FilterArea>
            <ProductsArea>
                <SingleProdCatTitle>
                    <div><h3>{heading}</h3></div>
                    <div> Sort by : <StyledSelect name="productrs" onChange={(e)=>setVal(e.target.value)} value={val}>
                        <option value="populer">Popularity</option>
                        <option value="ltoh">Low to High</option>
                        <option value="htol">High to Low</option>
                    </StyledSelect>
                    </div>
                </SingleProdCatTitle>
                <SingleProdGridDiv>{prods.filter((el)=>{
                    return el.price<Number(priceLimit);
                }).sort((a,b)=>{
                    if(val==='ltoh'){
                        return a.price - b.price;
                    }else if(val==='htol'){
                        return b.price - a.price;
                    }
                    return a-b;
                }).map((elements) => {
                    return <ItemDiv key={elements.id} onClick={()=>{localStorage.setItem("item",JSON.stringify(elements));navigate("/addtocart")}}>
                        <SingleProdCatImg src={elements.image} alt="" />
                        <SingleProdCatH4>{elements.title}</SingleProdCatH4>
                        <p>MRP <StyledProdCatSpan secondary>₹{elements.MRP}</StyledProdCatSpan></p>
                        <strong><StyledProdCatSpan primary>₹{elements.price}</StyledProdCatSpan></strong>
                    </ItemDiv>
                })}</SingleProdGridDiv>
            </ProductsArea>
        </StyledContainer>
    )
}
