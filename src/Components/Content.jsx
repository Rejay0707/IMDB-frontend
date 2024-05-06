import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Content = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    "https://c4.wallpaperflare.com/wallpaper/562/135/739/jake-sully-neytiri-ikran-makto-seze-wallpaper-preview.jpg",
    "https://wallpapers.com/images/featured/avengers-vm16xv4a69smdauy.jpg",
    "https://c4.wallpaperflare.com/wallpaper/947/272/849/anime-your-name-kimi-no-na-wa-mitsuha-miyamizu-wallpaper-preview.jpg",
  ];

  return (
    <div>
      <div
        className="container-fluid bg-dark py-3"
        style={{ minHeight: "80px" }}
      >
        <div className="row">
          <div className="col-4">
            <p
              className="text-white text-center py-2"
              style={{ fontSize: "1.5rem" }}
            >
              IMDB
            </p>
          </div>
          <div className="col-8 d-flex justify-content-end">
            <CustomLink to="/movies" className="text-white mr-3">
              Movies
            </CustomLink>
            <CustomLink to="/addMovie" className="text-white mr-3">
              Add Movie
            </CustomLink>
            <CustomLink to="/editMovie" className="text-white">
              Edit Movie
            </CustomLink>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "600px", margin: "0 auto", height: "700px" }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Movie ${index}`}
                style={{ width: "100%" }}
              />
            </div>
          ))}
        </Slider>
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
