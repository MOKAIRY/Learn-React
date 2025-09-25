import JapanImg from "../assets/Japan.jpg";
import Marker from "../assets/marker.png";

export default function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={props.img} alt="mount fuji" />
      </div>
      <div className="info-container">
        <img className="marker" src={Marker} alt="map marker icon" />
        <span className="country">{props.name}</span>
        <a href={props.link}>View on Google Maps</a>
        <h2 className="entry-title">{props.title}</h2>
        <p className="trip-dates">{props.date}</p>
        <p className="entry-text">{props.description}</p>
      </div>
    </article>
  );
}
