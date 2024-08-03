function Card() {
  return (
    <div className="row row-cols-2 row-cols-md-4 g-4">
      <div className="col">
        <div className="card border-0">
          <img
            src="./images/imgprueba/img1.jpg"
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
            src="./images/imgprueba/img2.jpg"
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
