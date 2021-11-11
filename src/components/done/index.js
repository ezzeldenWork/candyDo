import React, {useContext} from "react";
import Container from "../../global/container";
import GridBox from "../../global/gridSystem";
import {ContextApi} from "../../context/context_api";
import TodoCard from "../card";

const Done = () => {
  const [dodo] = useContext(ContextApi);

  return (
    <div>
      <Container>
        <GridBox>{!dodo.done && <TodoCard />}</GridBox>
      </Container>
    </div>
  );
};

export default Done;
