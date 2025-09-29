import DBLogo from "../../assets/dragon-ball-logo.avif";
import { pulseKeyframes, pulseStyle } from "../../constants/pulseStyles";

const LoadingFallback = () => {
  return (
    <>
      <style>{pulseKeyframes}</style>
      <section
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <article className="text-center">
          <figure style={{ maxWidth: "400px" }}>
            <img
              className="img-fluid"
              src={DBLogo}
              alt="Logo de Dragon Ball"
              width="900"
              height="900"
              style={pulseStyle}
            />
          </figure>
          <p className="visually-hidden">Cargando...</p>
        </article>
      </section>
    </>
  );
};

export default LoadingFallback;
