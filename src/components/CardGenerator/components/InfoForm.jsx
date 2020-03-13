import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Formik, Form, ErrorMessage, FastField } from "formik";
import InputField from "../../Form/InputField";

const useStyles = makeStyles(theme => ({
  field: {
    marginBottom: "20px"
  },
  error: {
    color: "red",
    display: "flex",
    justifyContent: "flex-start"
  },
  root: {
    width: "300px",
    paddingTop: "10px"
  }
}));

const validateEmail = values => {
  const { email } = values;
  const accessKey = process.env.REACT_APP_ACCESS_KEY;
  return fetch(
    `https://apilayer.net/api/check?access_key=${accessKey}&email=${email}&smtp=1&format=1`
  )
    .then(response => response.json())
    .then(res => {
      if (!res["format_valid"]) return { email: "Invalid email address" };
      return {};
    });
};
const InfoForm = ({ onSubmit }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: ""
        }}
        validate={validateEmail}
        onSubmit={onSubmit}
      >
        <Form>
          <div className={classes.field}>
            <FastField
              label="First Name"
              name="firstName"
              component={InputField}
            />
          </div>
          <div className={classes.field}>
            <FastField
              label="Last Name"
              name="lastName"
              component={InputField}
            />
          </div>
          <div className={classes.field}>
            <FastField
              label="Company Name"
              name="company"
              component={InputField}
            />
          </div>
          <div className={classes.field}>
            <FastField
              label="Email Address"
              name="email"
              component={InputField}
            />
            <div className={classes.error}>
              <ErrorMessage name="email" component="div" />
            </div>
          </div>
          <div className={classes.field}>
            <FastField
              label="Phone Number"
              name="phone"
              component={InputField}
            />
          </div>

          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default InfoForm;
