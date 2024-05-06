import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Imdb = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust as needed
  };

  const images = [
    "https://c4.wallpaperflare.com/wallpaper/562/135/739/jake-sully-neytiri-ikran-makto-seze-wallpaper-preview.jpg",
    "https://wallpapers.com/images/featured/avengers-vm16xv4a69smdauy.jpg",
    "https://c4.wallpaperflare.com/wallpaper/947/272/849/anime-your-name-kimi-no-na-wa-mitsuha-miyamizu-wallpaper-preview.jpg",
    // Add more image URLs as needed
  ];

  return (
    <div>
      <h1 className="text-center mt-4 mb-3">IMDB</h1>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
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

export default Imdb;
