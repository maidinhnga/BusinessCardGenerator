import React, { useRef } from 'react';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Card from './Card';
import { saveAs } from 'file-saver';

const Download = props => {
  const ref = useRef();
  const handleDownload = () => {
    ref.current.downloadCard(blob => {
      saveAs(blob, 'card.jpg');
    });
  };
  return (
    <>
      <Card ref={ref} {...props} />
      <Button
        variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
        onClick={handleDownload}
      >
        Download
      </Button>
    </>
  );
};

export default Download;
