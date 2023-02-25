import React from "react";
import { Form } from "react-bootstrap";
import SButton from "../../components/Button";
import TextInputLabel from "../../components/TextInputLabel";

const SForm = ({ form, handleChange, isLoading, handleSubmit }) => {
  return (
    <Form>
      <TextInputLabel
        label="Email address"
        name="email"
        value={form.email}
        onChange={handleChange}
        type="email"
        placeholder="Enter email"
      />

      <TextInputLabel
        label="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
        type="password"
        placeholder="Password"
      />
      <SButton
        loading={isLoading}
        disabled={isLoading}
        action={handleSubmit}
        variant="primary"
      >
        Signin
      </SButton>
    </Form>
  );
};

export default SForm;
