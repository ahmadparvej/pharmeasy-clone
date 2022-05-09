import React from 'react'
import { Product } from '../Pages/Product'
import styled from "styled-components";
import { useSelector ,useDispatch} from 'react-redux'
import { getData } from "../Redux/Products/Action";
const Container = styled.div`
    background:#fff2f2;
    padding:40px;`
const ProductContainer = styled.div`
    margin:auto;
    display:flex;
    overflow-x:auto;
    gap:10px;`
const PeroductHeadline = styled.div`
    display:flex;
    gap:20px;
    padding:20px;
    align-items:flex-end;`
export const DealsOfTheDay = () => {
    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(getData());
    },[])
    let data = useSelector(state => state.getDataReducer.data);
    if(data.length>0){
        let items = data[0].items
    return (
        <Container>
            <PeroductHeadline>
                <img src="https://assets.pharmeasy.in/web-assets/dist/cc9b301d.svg" alt="" />
                <h4>Deals of the Day</h4>
            </PeroductHeadline>
            <ProductContainer>
                {items.map((elements)=>{
                    return <Product key={elements.id} {...elements}/>
                })}
            </ProductContainer>
        </Container>
    )
    }
}
