function Card() {
  return (
    <div className="row row-cols-2 row-cols-md-4 g-4">
      <div className="col">
        <div className="card border-0">
          <img
            src="https://concepto.de/wp-content/uploads/2015/03/administrador-e1550360735144.jpg"
            className="card-img-top "
            style={{ borderRadius: "100px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0">
          <img
            src="https://media.istockphoto.com/id/1372336145/es/vector/peque%C3%B1a-empresa-y-tienda-local-con-concepto-de-tienda-boutique-frente-a-la-peque%C3%B1a-persona.jpg?s=612x612&w=0&k=20&c=qdpEr0jqk2RdusQMOi6mvVRlzwXxgNLRYrIhXr3AA8k="
            className="card-img-top"
            style={{ borderRadius: "100px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0">
          <img
            src="./images/imgprueba/cam.jpg"
            className="card-img-top"
            style={{ borderRadius: "100px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0">
          <img
            src="./images/imgprueba/img1.jpg"
            className="card-img-top"
            style={{ borderRadius: "100px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
