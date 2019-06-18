import React from "react";
import { IconContext } from "react-icons";
import { GiBiceps } from "react-icons/gi";

const color = "#545454";

const Provider = IconContext.Provider;

const BicepsIcon = () => {
  return (
    <Provider value={{ color }}>
      <GiBiceps />
    </Provider>
  );
};

export default BicepsIcon;
