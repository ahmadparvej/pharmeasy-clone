import styled from "styled-components";

export const Box = styled.div`
  // padding: 40px;
  background: #f4f7fb;
  margin-top: 20px;
  bottom: 0;
  width: 100%;
  font-family: sans-serif;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  // justify-content: center;
  // max-width: 1000px;
  // margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  width: 300px;
  // border: 1px solid red;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 100px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #4f5863;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #59585e;
  margin-bottom: 25px;
  font-weight: bold;
`;

export const Img = styled.img`
borderRadius: 50%,
width: 50px,
`;

export const Last = styled.div`
  // display: "flex";
  // justify-content: "space-between";
  
`;
