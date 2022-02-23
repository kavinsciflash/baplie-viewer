import React from "react";
import { TextField } from "@mui/material";

const InputText = ({ id, helperText, label, value, type, style, ...rest }) => {
  return (
    <TextField
      id={id}
      value={value}
      label={label}
      variant="filled"
      helperText={helperText}
      type={type}
      size="small"
      style={style}
      {...rest}
    />
  );
};

export default InputText;
