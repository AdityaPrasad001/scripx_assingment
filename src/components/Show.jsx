import React, { useState } from "react";
import { Route, Routes, useNavigate, Link } from "react-router-dom";
import List from "./List";
import Details from "./Details";
import Home from "./Home";
import "../App.css";

const Movies = () => {
  const navigate = useNavigate();
  const [showName, setShowName] = useState("");

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && showName.length > 0) {
      navigate(`/tv-shows/${showName}`);
    }
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <h1 className="link">Home</h1>
          </Link>
        </div>
        <div className="searchInput">
          <input
            type="text"
            placeholder="Search for tv shows...."
            onChange={(e) => setShowName(e.target.value)}
            onKeyUp={searchQueryHandler}
          />
          <button
            className="search_button"
            onClick={() => navigate(`/tv-shows/${showName}`)}
          >
            Search
          </button>
        </div>
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tv-shows/:name"
            element={<List showName={showName} />}
          />
          <Route path="/tv-shows/details/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default Movies;
