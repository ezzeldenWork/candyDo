import React from "react";
import {Card} from "antd";
import {
  EditOutlined,
  CheckOutlined,
  SettingOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import {CardBox, ColorBox} from "./style";

const TodoCard = ({img, name, color, important, very, start, end, desire, benefit, prize, note}) => {
  return (
    <CardBox>
      <Card
        // style={{width: 300}}
        cover={<img alt="example" className="imgcArd" src={img} height="150" />}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <CheckOutlined key="ellipsis" />,
        ]}
      >
        <ul className="taskList">
          <li className="canyName">
            {name}
            <ColorBox colorStyle={color}></ColorBox>
          </li>
          <li className="important">
            <span className="importantType">
              {important ? "Important and urgent" : "Not Important"}
            </span>
            <span className="veryImportant">
              {very && <ColorBox colorStyle="red"></ColorBox>}
            </span>
          </li>
          <li className="date">
            <span className="start">{start}</span>
            <ArrowRightOutlined />
            <span className="end">{end}</span>
          </li>
          <li className="desire">
            {" "}
            <span className="title">Desire </span>{desire}
          </li>
          <li className="desire">
            <span className="title">Benefit</span> {benefit}
          </li>
          <li className="desire">
            <span className="title">Prize</span> {prize}
          </li>
          <li className="desire">
            <span className="title">Note</span> {note}
          </li>
        </ul>
      </Card>
    </CardBox>
  );
};

export default TodoCard;
