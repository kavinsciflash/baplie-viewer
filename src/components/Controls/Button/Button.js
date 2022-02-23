import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({text , handleClick}) => {
  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      {text}
    </Button>
  );
};

export default CustomButton;
