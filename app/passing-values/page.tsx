"use client";

import React from "react";
import { Divider } from 'antd';
import Dawa from "./dawa";
import Erwa from "./erwa";
import Sanwa from "./sanwa";


const PassingValuesPage = () => {
  const [data, setData] = React.useState<string>("");

  const changeData = (newData: string) => {
    setData(newData);
  };

  return <div>
    <Dawa name="Dawa" />
    <Divider />
    <Erwa onSendData={changeData} />
    <Divider />
    <Sanwa name="Sanwa" count={data} />
  </div>;
};

export default PassingValuesPage;