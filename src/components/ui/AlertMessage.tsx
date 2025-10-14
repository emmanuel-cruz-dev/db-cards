import { Alert } from "react-bootstrap";

function AlertMessage({ message }: { message: string }) {
  return (
    <Alert variant="info" className="text-center">
      {message}
    </Alert>
  );
}

export default AlertMessage;
