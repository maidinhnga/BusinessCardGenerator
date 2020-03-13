import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabContent from "./components/TabContent";
import InfoForm from "./components/InfoForm";
import Review from "./components/Review";
import Download from "./components/Download";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    "& button": {
      float: "right"
    }
  },
  tabRoot: {
    borderBottom: "1px solid #ddd"
  },
  disabled: {
    cursor: "not-allowed !important",
    pointerEvents: "auto !important"
  },
  swipeable: {
    paddingTop: "40px",
    paddingBottom: "40px"
  }
}));

export default function CardGenerator() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [useInfo, setUserInfo] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const handleSubmit = values => {
    setUserInfo(values);
    setValue(1);
  };

  const handleReviewClick = () => {
    setValue(2);
  };

  return (
    <div className={classes.root}>
      <Tabs
        classes={{ root: classes.tabRoot }}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab
          classes={{ disabled: classes.disabled }}
          label="form input"
          disabled={value !== 0}
        />
        <Tab
          classes={{ disabled: classes.disabled }}
          label="preview card"
          disabled={value !== 1}
        />
        <Tab
          classes={{ disabled: classes.disabled }}
          label="export card"
          disabled={value !== 2}
        />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        className={classes.swipeable}
      >
        <TabContent value={value} index={0} dir={theme.direction}>
          <InfoForm onSubmit={handleSubmit} />
        </TabContent>
        <TabContent value={value} index={1} dir={theme.direction}>
          <Review {...useInfo} onClick={handleReviewClick} />
        </TabContent>
        <TabContent value={value} index={2} dir={theme.direction}>
          <Download {...useInfo} />
        </TabContent>
      </SwipeableViews>
    </div>
  );
}
