import styled from "styled-components";

export const Box = styled.div`
  font-size: large;
  font-family: "Convergence", sans-serif;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: #eaeaf0;
`;
export const DIV = styled.div`
width:80%;
margin: 40px auto;`
export const Form = styled.form`
  box-sizing: border-box;
  display: grid;
  position: relative;
  width: 500px;
  height: 550px;
  padding: 20px;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

export const Input = styled.input`
  position: relative;
  top: 0;
  left: 0;
  right: 10;
  width: 100%;
  height: 50px;
  padding-left: 10px;
  font-size: inherit;
  font-family: inherit;
  font-weight: 500;
  border: 2px solid #e1e5ee;
  border-radius: 5px;
  outline: none;
  z-index: 1;

  &:hover {
    border-color: #004caf;
  }
  &:focus {
    border-color: #1a5cec;
  }
`;

export const Label = styled.label`
  // position: relative;
  top: 10px;
  left: 10px;
  color: #004caf;
  z-index: 5;
  height: 10px;
  font-size: 14px;
  font-weight: 500;
  background-color: white;
  display: inline-block;
  cursor: text;
`;