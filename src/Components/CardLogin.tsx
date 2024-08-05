function Card() {
  return (
    <>
      <div className="row">
        <div className="col-md-5 col-sm-12 col-12 text-center">
          <img src="/images/VertiLogo.jpg" alt="..." style={{ width: "80%" }} />
          <h1>Inicio de Sesión</h1>
          <br />
          <br />
          <form>
            <div
              className="mb-3 input-group"
              style={{ width: "50%", margin: "0 auto" }}
            >
              <span
                className="input-group-text"
                id="basic-addon1"
                style={{ backgroundColor: "gray" }}
              >
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
              <span
                className="input-group-text"
                id="basic-addon2"
                style={{ backgroundColor: "gray" }}
              >
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

            <button type="button" className="btn btn-outline-primary ">
              Ingresar
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 col-sm-12 col-12 "></div>
      </div>
    </>
  );
}

export default Card;
