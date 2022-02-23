import React, { useState } from "react";
import {
  Input,
  FormControl,
  FormHelperText,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const InputPassword = ({
  id,
  placeholder,
  helperText,
  label,
  value,
  helperTextId,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <FormControl>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        aria-describedby={helperTextId}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={toggleShowPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText id={helperTextId}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default InputPassword;
