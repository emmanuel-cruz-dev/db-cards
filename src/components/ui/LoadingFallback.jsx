const LoadingFallback = () => (
  <section
    className="d-flex justify-content-center align-items-center"
    style={{ minHeight: "60vh" }}
  >
    <article className="text-center">
      <main className="spinner-border text-warning mb-3" role="status">
        <span className="visually-hidden">Cargando...</span>
      </main>
      <p className="text-light">Cargando página...</p>
    </article>
  </section>
);

export default LoadingFallback;
