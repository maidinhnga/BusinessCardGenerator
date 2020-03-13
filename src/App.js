import React from "react";
import CardGenerator from "./components/CardGenerator";
import useStyles from "./styles";
import { createMuiTheme, ThemeProvider, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5100ba"
    }
  }
});
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <header>
          <div className={classes.boxWidth}>
            <h1>Business Card Generator</h1>
          </div>
        </header>
        <div className={classes.boxWidth}>
          <section className={classes.boxIntro}>
            <div className={classes.introWrapper}>
              <div className={classes.col}>
                <h2>Grow your business with flashy cards</h2>
                <div className={classes.introContent}>
                  <p>
                    Get in front of customers when they’re looking at your card.
                    Let them see that you mean business and that they can trust
                    your skills
                  </p>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                >
                  START HERE
                </Button>
              </div>
              <div className={classes.col}>
                <img
                  src="styles/img/cover.png"
                  alt="cover"
                  className={classes.img}
                ></img>
              </div>
            </div>
          </section>
          <CardGenerator />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
