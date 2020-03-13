import React from "react";
import { Typography } from "@material-ui/core";

const TabContent = ({ children, value, index, ...rest }) => {
  return (
    <Typography component="div" hidden={value !== index} id={index} {...rest}>
      {value === index && children}
    </Typography>
  );
};
export default TabContent;
