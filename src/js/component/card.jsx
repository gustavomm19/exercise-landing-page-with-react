import React from "react";

const Card = ({ title, text }) => (
  <div class="card text-center single-card mb-3 mx-2">
    <div className="card-img-top thumb"></div>
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">
        {text}
      </p>
    </div>
    <div class="card-footer text-muted">
      <a href="#" class="btn btn-primary">
        Find Out more!
      </a>
    </div>
  </div>
);

export default Card;
