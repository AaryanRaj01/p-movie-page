import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/movies/${id}`)
            .then(response => response.json())
            .then(data => setMovie(data));
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className="bg-white shadow-lg rounded-lg p-5 max-w-2xl">
                <h1 className="text-4xl font-bold mb-5">{movie.title}</h1>
                <p className="text-lg">{movie.long_description}</p>
            </div>
        </div>
    );
};

export default MovieDetail;
