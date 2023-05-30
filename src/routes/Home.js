import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    loading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    this.setState({ movies, loading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { loading, movies } = this.state;
    return (
      <section className="container">
        {loading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                coverImg={movie.medium_cover_image}
                genres={movie.genres}
                rating={movie.rating}
                description={movie.description_full}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
