import React, {useContext} from "react";
import {Col, Row} from "antd";
import Container from "../../global/container";
import TodoCard from "../card";
import {ContextApi} from "../../context/context_api";
import EmptyBox from "../empty";

const Home = (props) => {
  const [dodo] = useContext(ContextApi);

  return (
    <Container>
      <Row gutter={[16, 6]} align="bottom">
        {dodo.map((item) => (
          <Col span="4" key={item.id}>
            <TodoCard
              key={item.id}
              img={item.imge}
              name={item.doName}
              color={item.color}
              important={item.important}
              very={item.very}
              start={item.start}
              typeDodo={item.typeDodo}
              end={item.end}
              desire={item.desire}
              benefit={item.benefit}
              prize={item.prize}
              note={item.note}
            />
          </Col>
        ))}

        {!dodo.length && (
          <Col span="24">
            <EmptyBox />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Home;
