import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="container">
          <div className="detail">
            <img
              src={location.state.coverImg}
              alt={location.state.title}
              className="detail__img"
            />
            <div>
              <h2 className="detail__title">{location.state.title}</h2>
              <h3 className="detail__year">{location.state.year}</h3>
              <h3 className="detail__rating">💕 : {location.state.rating}</h3>
              <p className="detail__description">
                {location.state.description}
              </p>
              <ul className="detail__genres">
                {location.state.genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
