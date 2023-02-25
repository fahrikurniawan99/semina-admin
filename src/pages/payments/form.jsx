import React from "react";
import { Figure, Form } from "react-bootstrap";
import Button from "../../components/Button";
import TextInputLabel from "../../components/TextInputLabel";
import { config } from "../../configs";

export default function PaymentsForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
}) {
  return (
    <Form>
      <TextInputLabel
        placeholder={"Masukan tipe"}
        label={"Type"}
        name="type"
        value={form.type}
        type="text"
        onChange={handleChange}
      />

      <TextInputLabel
        placeholder={"Masukan Avatar"}
        label={"Avatar"}
        name="avatar"
        // value={form.avatar}
        type="file"
        onChange={handleChange}
      />
      {form.avatar !== "" && (
        <div>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={`${config.api_image}/${form.avatar}`}
            />

            <Figure.Caption>Perview image avatar</Figure.Caption>
          </Figure>
        </div>
      )}
      <Button variant="primary" action={handleSubmit} loading={isLoading}>
        {edit ? "Ubah" : "Simpan"}
      </Button>
    </Form>
  );
}
