
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";
import Modal from "react-bootstrap/Modal";

const EditMovie = () => {
  const [movies, setMovies] = useState([]);
  const [editMovieId, setEditMovieId] = useState(null);
  const [formData, setFormData] = useState({
    Title: "",
    Year: "",
    Actor: "",
    Producer: "",
    imdbRating: "",
    Images: [],
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${BASE_URL}/api/movies`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleEdit = (movieId) => {
    setEditMovieId(movieId);
    const movieToEdit = movies.find((movie) => movie._id === movieId);
    setFormData(movieToEdit);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(`${BASE_URL}/api/movies/${editMovieId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Reload movies after update
      const response = await axios.get(`${BASE_URL}/api/movies`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMovies(response.data);
      setEditMovieId(null);
      setFormData({
        Title: "",
        Year: "",
        Actor: "",
        Producer: "",
        imdbRating: "",
        Images: [],
      });
      setShowModal(false);
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  return (
    <div className="container">
      <h1>Edit Movies</h1>
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
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleEdit(movie._id)}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="Title"
                value={formData.Title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="year" className="form-label">
                Year
              </label>
              <input
                type="text"
                className="form-control"
                id="year"
                name="Year"
                value={formData.Year}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="actor" className="form-label">
                Actor
              </label>
              <input
                type="text"
                className="form-control"
                id="actor"
                name="Actor"
                value={formData.Actor}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="producer" className="form-label">
                Producer
              </label>
              <input
                type="text"
                className="form-control"
                id="producer"
                name="Producer"
                value={formData.Producer}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="imdbRating" className="form-label">
                IMDb Rating
              </label>
              <input
                type="text"
                className="form-control"
                id="imdbRating"
                name="imdbRating"
                value={formData.imdbRating}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="images" className="form-label">
                Images (comma-separated URLs)
              </label>
              <input
                type="text"
                className="form-control"
                id="images"
                name="Images"
                value={formData.Images.join(",")}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditMovie;
