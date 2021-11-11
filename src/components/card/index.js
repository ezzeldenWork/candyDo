import React, {useContext} from "react";
import {Card, Col, Row} from "antd";
import {
  EditOutlined,
  CheckOutlined,
  SettingOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import {ContextApi} from "../../context/context_api";
import {CardBox, ColorBox} from "./style";

const TodoCard = () => {
  const [dodo, setDodo] = useContext(ContextApi);

  return (
    <>
      {dodo.map((item) => (
        <CardBox key={item.id}>
          <Card
            cover={
              <img
                alt="example"
                className="imgcArd"
                src={item.img}
                height="150"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <CheckOutlined key="ellipsis" />,
            ]}
          >
            <ul className="taskList">
              <li className="canyName">
                {item.doName}
                <ColorBox colorStyle={item.color}></ColorBox>
              </li>
              <li className="important">
                <span className="importantType">
                  {item.important ? "Important and urgent" : "Not Important"}
                </span>
                <span className="veryImportant">
                  {item.very && <ColorBox colorStyle="red"></ColorBox>}
                </span>
              </li>
              <li className="date">
                <span className="start">{item.start}</span>
                <ArrowRightOutlined />
                <span className="end">{item.end}</span>
              </li>
              <li className="desire">
                <span className="title">Type </span>
                {item.typeDodo}
              </li>
              <li className="desire">
                <span className="title">Desire </span>
                {item.desire}
              </li>
              <li className="desire">
                <span className="title">Benefit</span> {item.benefit}
              </li>
              <li className="desire">
                <span className="title">Prize</span> {item.prize}
              </li>
              <li className="desire">
                <span className="title">Note</span> {item.note}
              </li>
            </ul>
          </Card>
        </CardBox>
      ))}
    </>
  );
};

export default TodoCard;
