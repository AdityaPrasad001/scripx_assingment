import React from "react";
import "../App.css";
import { formatDate } from "./_helpers";
import { Link } from "react-router-dom";

const ShowItem = ({
  id,
  name,
  genres,
  runtime,
  premiered,
  rating,
  country,
  medium,
}) => {
  const premiredDate = new Date(premiered);

  return (
    <div className="list_item">
      <div>
        <div className="item_container-title">
          <Link to={`/tv-shows/details/${id}`}>{name}</Link>
        </div>
        <div className="item_container-details">
          {genres && <p>{genres}</p>}
          {runtime && <p>{runtime} hrs</p>}
          {premiredDate && <p>{formatDate(premiredDate)}</p>}
          <p>{rating?.average}</p>
          <p>{country?.name}</p>
        </div>
      </div>

      <div className="item_container-details">
        <img src={medium} alt={`Thumbnail ${name}`} width={"100px"} />
      </div>
    </div>
  );
};

export default ShowItem;
