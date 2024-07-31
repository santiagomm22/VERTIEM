function Card() {
  return (
    <div
      className="card mb-0 mx-auto"
      style={{
        width: "45%",
        boxShadow:
          "0 10px 10px 0 rgba(0, 0, 0, 0.2), 0 10px 80px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <img
        src="./images/VertiLogo.jpg"
        className="card-img-top ms-auto"
        alt="..."
        style={{ width: "90%" }}
      />
      <div className="card-body text-center">
        <strong className="card-title">
          <h2>Iniciar Sesión</h2>
        </strong>
        <form>
          <div
            className="mb-3 input-group"
            style={{ width: "50%", margin: "0 auto" }}
          >
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Usuario"
              aria-label="Usuario"
              aria-describedby="basic-addon1"
            />
          </div>
          <div
            className="mb-3 input-group"
            style={{ width: "50%", margin: "0 auto" }}
          >
            <span className="input-group-text" id="basic-addon2">
              <i className="bi bi-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Contraseña"
              aria-label="Contraseña"
              aria-describedby="basic-addon2"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Card;
