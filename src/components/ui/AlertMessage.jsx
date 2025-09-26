import React from "react";
import { Alert } from "react-bootstrap";

function AlertMessage({ message }) {
  return (
    <Alert variant="info" className="text-center">
      {message}
    </Alert>
  );
}

export default AlertMessage;
