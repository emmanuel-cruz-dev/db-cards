import React, { useEffect, useState } from "react";
import Card from "./Card";

function CardContainer() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCharacters = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/characters`
      );
      const data = await response.json();
      setCharacters(data.items);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching characters:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <section className="container">
      <h1>Characters</h1>
      <p>Here are some characters:</p>
      <article className="row">
        {isLoading || characters.length === 0 ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          characters.map((character) => (
            <Card
              key={character.id}
              name={character.name}
              description={character.description}
              image={character.image}
            />
          ))
        )}
      </article>
    </section>
  );
}

export default CardContainer;
