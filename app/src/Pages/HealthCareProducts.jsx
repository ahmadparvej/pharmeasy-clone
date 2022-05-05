import React from 'react'
import { getData } from '../Redux/Products/Action'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid';
import {useNavigate} from 'react-router-dom'
import { ProdCategory } from "./ProdCategory";
import styled from 'styled-components'
const StyledProdList = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:10px;
    margin:20px 10%`
export const HealthCareProducts = () => {
    const navigate = useNavigate(); 
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
                    return <ProdCategory key={item.id} item={item} />
                })}
            </StyledProdList>
        </div>
    )
}

