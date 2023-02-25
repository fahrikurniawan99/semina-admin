import React from "react";
import { Form } from "react-bootstrap";
import TextInput from "../TextInput";

const TextInputLabel = ({
  name,
  value,
  type,
  onChange,
  placeholder,
  label,
}) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <TextInput {...{ name, value, type, onChange, placeholder }} />
    </Form.Group>
  );
};

export default TextInputLabel;
