import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";

const AddNewMovie = () => {
  const [formData, setFormData] = useState({
    Title: "",
    Year: "",
    Actor: "",
    Producer: "",
    imdbRating: "",
    Images: [],
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Images") {
      // Split the comma-separated string into an array
      setFormData({ ...formData, [name]: value.split(",") });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(`${BASE_URL}/api/movies/movies`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage("Movie successfully added!");
      setFormData({
        Title: "",
        Year: "",
        Actor: "",
        Producer: "",
        imdbRating: "",
        Images: [],
      });
    } catch (error) {
      console.error("Error adding movie:", error);
      setMessage("Failed to add movie. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Movie</h2>
      {message && <div className="alert alert-info">{message}</div>}
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewMovie;
