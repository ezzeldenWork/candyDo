import React, {useContext} from "react";
import {Col, Row} from "antd";
import Container from "../../global/container";
import GridBox from "../../global/gridSystem";
import TodoCard from "../card";
import {ContextApi} from "../../context/context_api";
import EmptyBox from "../empty";

const Home = (props) => {
  const [dodo] = useContext(ContextApi);
  console.log(dodo);
  return (
    <Container>
      <GridBox>{!dodo.done && <TodoCard />}</GridBox>
      {!dodo.length && (
        <Row gutter={[16, 6]} align="bottom">
          <Col span="24">
            <EmptyBox />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Home;
