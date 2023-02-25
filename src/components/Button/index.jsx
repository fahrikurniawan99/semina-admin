import React from "react";
import { Button } from "react-bootstrap";

const SButton = ({
  children,
  variant,
  disabled,
  action,
  loading,
  size,
  className,
}) => {
  return (
    <Button
      variant={variant}
      disabled={disabled}
      onClick={action}
      size={size}
      className={className}
    >
      {loading ? "Loading..." : children}
    </Button>
  );
};

export default SButton;
