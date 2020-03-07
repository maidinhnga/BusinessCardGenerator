import React from 'react';
import { Typography, Box } from '@material-ui/core';

const TabContent = ({ children, value, index, ...rest }) => {
  return (
    <Typography component="div" hidden={value !== index} id={index} {...rest}>
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};
export default TabContent;
