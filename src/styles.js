import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: "1024px",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto"
  },
  boxWidth: {
    maxWidth: "850px",
    margin: "0 auto"
  },
  boxIntro: {
    marginTop: "40px",
    marginBottom: "90px",
    "& h2": {
      fontSize: "54px",
      margin: "20px 0"
    },
    "& button": {
      float: "right"
    }
  },
  introWrapper: {
    display: "flex"
  },
  col: {
    position: "relative",
    paddingRight: "15px",
    paddingLeft: "15px"
  },
  img: {
    display: "block",
    maxWidth: "100%",
    height: "auto",
    verticalAlign: "middle",
    border: 0
  }
}));

export default useStyles;
