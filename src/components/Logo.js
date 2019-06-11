import React from "react";
import { IconContext } from "react-icons";
import { GiWhaleTail } from "react-icons/gi";

const color = "#545454";

const Provider = IconContext.Provider;

const Logo = () => {
  return (
    <Provider value={{ color, size: "2em" }}>
      <GiWhaleTail />
    </Provider>
  );
};

export default Logo;
