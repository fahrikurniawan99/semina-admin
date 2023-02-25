import { Alert } from "react-bootstrap";

const SAlert = ({ message, type }) => (
  <Alert variant={type}>{message}</Alert>
);

export default SAlert;
