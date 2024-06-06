import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
        <h1 className="flex justify-center items-center my-2 font-bold text-black">Movie HomePage</h1>
      {movies.map((movie) => (
        <Link to={`/movies/${movie._id}`} key={movie._id} className="block">
          <div className="flex  md:flex-row border rounded-lg shadow-lg overflow-hidden my-5 hover:bg-gray-100 transition duration-300 ease-in-out">
            <div className="px-5 py-3 md:w-1/3 flex justify-center items-center bg-gray-100">
              <div className="justify-center flex-col">
                <div>
                <h2 className="text-2xl font-bold mb-3">{movie.title}</h2>
                </div>
                <div className="flex justify-center ">
                <img
                  className="w-25  h-15 md:w-36 md:h-36 rounded"
                  src={movie.image}
                  alt={movie.title}
                />
                </div>
                
              </div>
            </div>
            <div className="px-5 py-3 md:w-2/3 bg-white flex flex-col justify-between">
              <p className="mb-4">{movie.short_description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
