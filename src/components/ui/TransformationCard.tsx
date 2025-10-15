import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import TransformationCardPlaceholder from "./TransformationCardPlaceholder";
import { TransformationCardProps } from "../../types/transformation";

function TransformationCard({
  id,
  name,
  image,
  ki,
  isLoading,
}: TransformationCardProps) {
  if (isLoading) return <TransformationCardPlaceholder />;

  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img
        className="py-2"
        variant="top"
        src={image}
        alt={name}
        style={{
          height: "14rem",
          objectFit: "contain",
          backgroundColor: "#e9ecef",
        }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="mb-3">
          <strong>Ki:</strong> {ki}
        </Card.Text>
        <Link to={`/transformations/${id}`} className="btn btn-primary">
          Ver más
        </Link>
      </Card.Body>
    </Card>
  );
}

export default TransformationCard;
