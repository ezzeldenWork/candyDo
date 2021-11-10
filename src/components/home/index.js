import React, {useContext} from "react";
import {Col, Row} from "antd";
import Container from "../../global/container";
import TodoCard from "../card";
import {ContextApi} from "../../context/context_api";

const Home = (props) => {
  const [dodo] = useContext(ContextApi);

  console.log(dodo);

  return (
    <Container>
      <Row gutter={[16, 6]} align="bottom">
        {/* <TodoCard /> */}

        {dodo.map((item) => (
          <Col span="4">
            <TodoCard
              key={item.id}
              img={item.imge}
              name={item.doName}
              color={item.color}
              important={item.important}
              very={item.very}
              start={item.start}
              end={item.end}
              desire={item.desire}
              benefit={item.benefit}
              prize={item.prize}
              note={item.note}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
