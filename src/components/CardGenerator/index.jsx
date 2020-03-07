import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContent from './components/TabContent';
import InfoForm from './components/InfoForm';
import Review from './components/Review';
import Download from './components/Download';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    '& button': {
      float: 'right'
    }
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
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Infomation" />
        <Tab label="Review" disabled={useInfo === undefined} />
        <Tab label="Finish" disabled={useInfo === undefined} />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContent value={value} index={0} dir={theme.direction}>
          <InfoForm onSubmit={handleSubmit} initValues={useInfo} />
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
