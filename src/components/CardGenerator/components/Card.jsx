import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { saveAs } from "file-saver";
import { toJpeg } from "html-to-image";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px 10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    marginBottom: "20px",
    maxWidth: "400px",
    height: "250px",
    marginLeft: "auto",
    marginRight: "auto",
    boxSizing: "border-box",
    justifyContent: "space-between"
  },
  company: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    margin: "10px",
    textTransform: "uppercase",
    fontWeight: 700
  },
  contact: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  }
}));
const Card = ({ firstName, lastName, company, email, phone }, ref) => {
  const classes = useStyles();
  const rootRef = useRef();

  useImperativeHandle(ref, () => ({
    downloadCard: () => {
      toJpeg(rootRef.current, {
        backgroundColor: "#fff",
        height: 250
      }).then(dataUrl => {
        saveAs(dataUrl, "card.jpg");
      });
    }
  }));
  return (
    <div ref={rootRef}>
      <div className={classes.root}>
        <div>{`${firstName} ${lastName}`}</div>
        <div className={classes.company}>{company}</div>
        <div className={classes.contact}>
          <div>{email}</div>
          <div>{phone}</div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Card);
