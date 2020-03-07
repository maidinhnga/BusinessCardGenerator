import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import html2canvas from 'html2canvas';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px 10px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    marginBottom: '20px'
  },
  company: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    margin: '10px'
  },
  contact: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  }
}));
const Card = ({ firstName, lastName, company, email, phone }, ref) => {
  const classes = useStyles();
  const rootRef = useRef();

  useImperativeHandle(ref, () => ({
    downloadCard: callback => {
      return html2canvas(rootRef.current).then(canvas =>
        canvas.toBlob(callback, 'image/jpeg')
      );
    }
  }));
  return (
    <div ref={rootRef} className={classes.root}>
      <div>{`${firstName} ${lastName}`}</div>
      <div className={classes.company}>{company}</div>
      <div className={classes.contact}>
        <div>{email}</div>
        <div>{phone}</div>
      </div>
    </div>
  );
};

export default forwardRef(Card);
