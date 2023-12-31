import { Button } from "@material-tailwind/react";
import React from "react";

export const FilledButton = ({ children, variant = "filled", color }) => {
  return (
    <div className="text-btn">
      <Button
        variant={variant}
        color={color}
        className="font-normal font-heading text-primary hover:text-white hover:bg-primary"
      >
        {children}
      </Button>
    </div>
  );
};

export const OutlinedButton = ({ children, variant = "outlined", color }) => {
  return (
    <div>
      <Button
        variant={variant}
        color={color}
        className="font-normal font-heading text-white hover:text-primary hover:bg-white opacity-1"
      >
        {children}
      </Button>
    </div>
  );
};
