import React from "react";
import {Card} from "antd";
import {
  EditOutlined,
  CheckOutlined,
  SettingOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import {CardBox, ColorBox} from "./style";

const TodoCard = () => {
  return (
    <CardBox>
      <Card
        style={{width: 300}}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
            Note
            <ColorBox  colorStyle="blue"></ColorBox>
          </li>
          <li className="important">
            <span className="importantType">ads</span>
            <span className="veryImportant">asd</span>
          </li>
          <li className="date">
            <span className="start">10-5-3002</span>
            <ArrowRightOutlined />
            <span className="end">10-5-3002</span>
          </li>
          <li className="desire"> <span className="title">Desire </span> lo,asdlmpasdmoasdjpiasdhp</li>
          <li className="desire"><span className="title">Benefit</span> dasmoihasd0i </li>
          <li className="desire"><span className="title">Prize</span> dasmoihasd0i </li>
          <li className="desire"><span className="title">Note</span> dasmoihasd0i </li>
        </ul>
      </Card>
    </CardBox>
  );
};

export default TodoCard;
