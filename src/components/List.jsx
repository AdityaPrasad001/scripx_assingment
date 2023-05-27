import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowItem from "./ShowItem";
import { useParams } from "react-router-dom";

const List = ({ showName }) => {
  const [shows, setShows] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/search/shows?q=${name}`).then((res) => {
      // console.log(res.data);
      setShows(res.data);
    });
  }, [name, showName]);

  return (
    <div>
      {shows.map((show) => (
        <ShowItem
          key={show.show.id}
          id={show.show.id}
          name={show.show.name}
          language={show.show.language}
          genres={show.show.genres}
          runtime={show.show.runtime}
          premiered={show.show.premiered}
          rating={show.show.rating}
          country={show.show?.network?.country}
          medium={show.show?.image?.medium}
        />
      ))}
    </div>
  );
};

export default List;
