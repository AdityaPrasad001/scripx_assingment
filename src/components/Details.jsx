import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { formatDate } from "./_helpers";

const Details = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`).then((res) => {
      setShow(res.data);
    });
  }, [id]);

  return (
    <div className="item_container">
      <div className="item_grid">
        <div className="detail_left">
          <h1>{show?.name}</h1>
          <p>{show?.genres}</p>
          <p>{show?.type}</p>
          <p>{show?.runtime}</p>
          <p>{formatDate(new Date(show?.premiered))}</p>
          <p>{show?.rating?.average}</p>
        </div>
        <div className="detail_right">
          <img src={show?.image?.medium} alt={`Thumbnail ${name}`} />
        </div>
      </div>
      <div>{show?.summary}</div>
    </div>
  );
};

export default Details;
