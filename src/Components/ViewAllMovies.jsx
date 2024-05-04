import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";

const ViewAllMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        const response = await axios.get(`${BASE_URL}/api/movies`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;
        console.log(data);
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container">
      <h1>All Movies</h1>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4" key={movie._id}>
            <div className="card mb-3" style={{ height: "550px" }}>
              <div style={{ height: "300px", overflow: "hidden" }}>
                <img
                  src={movie.Images[0]}
                  className="card-img-top"
                  alt={movie.Title}
                  style={{ objectFit: "cover", height: "100%", width: "100%" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">Year: {movie.Year}</p>
                <p className="card-text">Actor: {movie.Actor}</p>
                <p className="card-text">Producer: {movie.Producer}</p>
                <p className="card-text">IMDb Rating: {movie.imdbRating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllMovies;
