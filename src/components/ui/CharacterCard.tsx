import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import CharacterCardPlaceholder from "./CharacterCardPlaceholder";
import { CharacterCardProps } from "../../types/character";

function CharacterCard({
  id,
  name,
  race,
  description,
  image,
  isLoading = false,
}: CharacterCardProps) {
  if (isLoading) return <CharacterCardPlaceholder />;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        className="py-2"
        variant="top"
        src={image}
        alt={name}
        style={{
          height: "15rem",
          objectFit: "contain",
          backgroundColor: "#e9ecef",
        }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="mb-1">
          <strong>Raza:</strong> {race}
        </Card.Text>
        <Card.Text className="line-clamp-3">{description}</Card.Text>
        <Link to={`/characters/${id}`} className="btn btn-primary">
          Ver más
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;
