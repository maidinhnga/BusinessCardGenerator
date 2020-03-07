import React, { useCallback } from 'react';
import { TextField } from '@material-ui/core';

const InputField = ({
  field: { onChange: onFieldChange, onBlur: onFieldBlur, name, value },
  onChange,
  onBlur,
  ...props
}) => {
  const handleOnChange = useCallback(
    e => {
      onFieldChange(e);
      if (onChange) {
        onChange(e);
      }
    },
    [onFieldChange, onChange]
  );

  const handleOnBlur = useCallback(
    e => {
      onFieldBlur(e);
      if (onBlur) {
        onBlur(e);
      }
    },
    [onFieldBlur, onBlur]
  );
  return (
    <TextField
      {...props}
      defaultValue={value}
      name={name}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      variant="outlined"
      fullWidth
    />
  );
};

export default InputField;
