import React from 'react';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Card from './Card';

const Review = props => {
  return (
    <>
      <Card {...props} />
      <Button
        variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
        onClick={props.onClick}
      >
        Looks Good
      </Button>
    </>
  );
};

export default Review;
