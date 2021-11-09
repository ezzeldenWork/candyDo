import React, {useState} from "react";
import {PageHeader, Button} from "antd";
import {HeaderBox} from "./style";
import ModalBox from "../modal/index";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const close = () => {
    setVisible(false)
  }


  return (
    <HeaderBox>
      <PageHeader
        className="site-page-header"
        title="Do Candy"
        subTitle="Todo For you"
        extra={[
          <span className="count" key="1">Number 2</span>,
          <Button
          key="2"
            type="primary"
            onClick={() => setVisible(true)}
          >
            Add New
          </Button>,
        ]}
      />
      <ModalBox visible={visible} onCancel={close} />
    </HeaderBox>
  );
};

export default Header;
