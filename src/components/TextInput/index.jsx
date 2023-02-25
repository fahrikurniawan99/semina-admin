import React from "react";
import { Form } from "react-bootstrap";

const TextInput = ({ name, value, type, onChange, placeholder }) => {
  return <Form.Control {...{ name, value, type, onChange, placeholder }} />;
};

export default TextInput;
