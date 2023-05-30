import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({
  id,
  year,
  title,
  summary,
  coverImg,
  genres,
  rating,
  description,
}) {
  return (
    <div className="movie">
      <img src={coverImg} alt={title} title={title} className="movie__img" />
      <div>
        <h2 className="movie__title">
          <Link
            to={{
              pathname: `/movie/${id}`,
              state: {
                year,
                title,
                summary,
                coverImg,
                genres,
                rating,
                description,
              },
            }}
          >
            {title}
          </Link>
        </h2>
        <h3 className="movie__year">{year}</h3>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
