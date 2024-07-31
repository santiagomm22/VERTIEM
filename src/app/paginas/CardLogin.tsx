function Card() {
  return (
    <>
      <div className="row">
        <div className="col-md-4 col-sm-12"></div>
        <div className="col-md-4 col-sm-12">
          <h1>asassaasas</h1>
          <div className="card mb-3">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>

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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-lock-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                    </svg>
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
        </div>
        <div className="col-md-4 col-sm-12"></div>
      </div>
    </>
  );
}

export default Card;
