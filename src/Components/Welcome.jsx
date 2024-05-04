import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const WelcomePage = () => {
    const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
        navigate('/login');; 
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <div className="container">

    <div className="jumbotron text-center mt-5">
        <h1 className="display-4">Welcome to IMDB</h1>
        <p className="lead">Your ultimate destination for movies and more.</p>
        
    </div>
    </div>
  );
};

export default WelcomePage;

