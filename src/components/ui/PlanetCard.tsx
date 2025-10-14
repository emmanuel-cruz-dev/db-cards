import { Card, Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";

interface PlanetCardProps {
  id?: string;
  name?: string;
  image?: string;
  description?: string;
  isDestroyed?: boolean;
  isLoading?: boolean;
}

function PlanetCard({
  id,
  name,
  image,
  description,
  isDestroyed,
  isLoading,
}: PlanetCardProps) {
  if (isLoading) {
    return (
      <Card style={{ width: "21rem" }}>
        <Placeholder
          as="div"
          animation="glow"
          style={{ height: "16rem", backgroundColor: "#e9ecef" }}
        />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} animation="glow" />
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card style={{ width: "21rem" }}>
      <Card.Img
        className=""
        variant="top"
        src={image}
        alt={name}
        style={{ width: "100%", height: "16rem", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="mb-1">
          <strong>Estado:</strong> {isDestroyed ? "Destruido" : "Habitable"}
        </Card.Text>
        <Card.Text className="line-clamp-3">{description}</Card.Text>
        <Link to={`/planets/${id}`} className="btn btn-primary">
          Ver más
        </Link>
      </Card.Body>
    </Card>
  );
}

export default PlanetCard;
