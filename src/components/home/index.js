import { Col, Row} from "antd";
import React from "react";
import Container from "../../global/container";
import TodoCard from "../card";

const Home = () => {
  return (
    <Container>
      <Row gutter={[16, 6]} align="bottom">
        <Col span="8">
          <TodoCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
