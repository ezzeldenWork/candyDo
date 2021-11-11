import React, {useState} from "react";
import {PageHeader, Button} from "antd";
import {HeaderBox} from "./style";
import {useContext} from "react/cjs/react.development";
import {ContextApi} from "../../context/context_api";
import ButtonPop from "../popupBottom";

const Header = () => {
  const [dodo, setDodo] = useContext(ContextApi);

  return (
    <HeaderBox>
      <PageHeader
        className="site-page-header"
        title="Do Candy"
        subTitle="Todo For you"
        extra={[
          <div className="headre_side" key="1">
            <span className="count" >
              {dodo.length <= 0
                ? "No Candy "
                : `Do Do Take ${dodo.length} Candys`}{" "}
            </span>
            ,
            <ButtonPop />
          </div>,
        ]}
      />
    </HeaderBox>
  );
};

export default Header;
