import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Content = () => {
  return (
    <div className="container-fluid bg-dark py-3" style={{ minHeight: "70px" }}>
      <div className="row">
        <div className="col-4">
          <Link
            to="/imdb"
            className="text-white text-center py-2"
            style={{ fontSize: "1.5rem" }}
          >
            IMDB
          </Link>
        </div>
        <div className="col-8 d-flex justify-content-end">
          <CustomLink to="/movies" className="text-white mr-3">
            Movies
          </CustomLink>
          <CustomLink to="/addMovie" className="text-white">
            Add Movie
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div className={`nav-item ${isActive ? "active" : ""}`}>
      <Link to={to} className="nav-link" {...props}>
        {children}
      </Link>
    </div>
  );
}

export default Content;
