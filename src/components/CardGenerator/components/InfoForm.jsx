import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import InputField from '../../Form/InputField';

const useStyles = makeStyles(theme => ({
  field: {
    marginBottom: '20px'
  },
  error: {
    color: 'red',
    display: 'flex',
    justifyContent: 'flex-start'
  }
}));

const validateEmail = values => {
  debugger;
  const { email } = values;
  if (!email) {
    return { email: 'Email is required' };
  }
  return fetch(
    `https://apilayer.net/api/check?access_key=19d37420a42397aa6fe50941f35f841f&email=${email}&smtp=1&format=1`
  )
    .then(response => response.json())
    .then(res => {
      if (!res['format_valid']) return { email: 'Invalid email address' };
      return {};
    });
};
const InfoForm = ({ onSubmit, initValues }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={initValues || {}}
      validate={validateEmail}
      onSubmit={values => {
        onSubmit(() => onSubmit(values));
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={classes.field}>
            <Field label="First Name" name="firstName" component={InputField} />
          </div>
          <div className={classes.field}>
            <Field label="Last Name" name="lastName" component={InputField} />
          </div>
          <div className={classes.field}>
            <Field label="Company Name" name="company" component={InputField} />
          </div>
          <div className={classes.field}>
            <Field label="Email Address" name="email" component={InputField} />
            <div className={classes.error}>
              <ErrorMessage name="email" component="div" />
            </div>
          </div>
          <div className={classes.field}>
            <Field label="Phone Number" name="phone" component={InputField} />
          </div>

          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default InfoForm;
