import { Button } from "@material-tailwind/react";
import React from "react";

export const FilledButton = ({ children, variant = "filled", color }) => {
  return (
    <div className="text-btn">
      <Button
        variant={variant}
        color={color}
        className="font-normal font-heading text-primary"
      >
        {children}
      </Button>
    </div>
  );
};
