import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SAlert from "../../components/Alert";
import SForm from "./Form";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/actions";
import { postData } from "../../utils/fetch";

const PageSignin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const res = await postData("/cms/auth/signin", form);
    if (res?.data?.data) {
      navigate("/dashboard");
      dispatch(
        userLogin(
          res.data.data.token,
          res.data.data.role,
          res.data.data.email,
          res.data.data.refreshToken
        )
      );
      setIsLoading(false);
    } else {
      setAlert({
        type: "danger",
        message: res.response.data.msg ?? "Internal server error",
        status: true,
      });
      setIsLoading(false);
    }
  };

  return (
    <Container md={12}>
      <div className="m-auto" style={{ width: "50%" }}>
        {alert.status && <SAlert type={alert.type} message={alert.message} />}
      </div>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title className="text-center">Form signin</Card.Title>
          <SForm
            handleChange={handleChange}
            isLoading={isLoading}
            form={form}
            handleSubmit={handleSubmit}
          />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PageSignin;
