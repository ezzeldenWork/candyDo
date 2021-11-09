import React from 'react'
import styled from "styled-components";

const ContainerBox = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Container = (props) => {
  return (
    <ContainerBox>
      {props.children}
    </ContainerBox>
  )
}

export default Container
