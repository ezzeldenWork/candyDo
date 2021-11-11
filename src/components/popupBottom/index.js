import {Button} from "antd";
import React, {useState} from "react";
import ModalBox from "../modal";

const ButtonPop = () => {
  const [visible, setVisible] = useState(false);

  const close = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button key="2" type="primary" onClick={() => setVisible(true)}>
        Add New
      </Button>
      <ModalBox visible={visible} onCancel={close} setVisible={setVisible}  />
    </div>
  );
};

export default ButtonPop;
