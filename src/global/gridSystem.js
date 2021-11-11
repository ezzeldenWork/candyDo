import React from "react";
import styled from "styled-components";

const GridBox = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: auto auto auto auto; 
`;
const GridSystem = (props) => {
  return <GridBox> {props.children}</GridBox>;
};

export default GridSystem;
