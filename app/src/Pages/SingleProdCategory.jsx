import React from 'react'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { Product } from "./Product";
import { StyledContainer,FilterArea,Styledform,SingleProdCatTitle,ProductsArea,StyledSelect,SingleProdGridDiv } from "./styled";

export const SingleProdCategory = () => {
    const { id } = useParams()
    const { data } = useSelector((state) => state.getDataReducer);
    const [prods, setProds] = React.useState([]);
    const [heading, setHeading] = React.useState("Products");
    const [val, setVal] = React.useState(0);
    const [priceLimit,setPriceLimit] = React.useState(900000000);
    // const navigate = useNavigate()
    
    React.useEffect(() => {
        let newData;
        data.filter((elem) => {
            if (elem.id === Number(id)) {
                newData = elem.items;
                setHeading(elem.categoryName)
                return elem.items;
            }
            return elem;
        })
        setProds(newData)
    }, [data,id])
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
                    return <Product key={elements.id} {...elements}/>
                })}</SingleProdGridDiv>
            </ProductsArea>
        </StyledContainer>
    )
}
