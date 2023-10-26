import PropTypes from "prop-types";
import star from "../assets/star.svg";
import halfStar from "../assets/star-half-full.svg";
import emptyStar from "../assets/star-outline.svg";
import styles from "../css/StarRating.module.css";

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);

  const hasHalfStar = rating % 1 !== 0;

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      stars.push(<img key={i} src={star} className={styles.star} alt="star" />);
    } else if (i === filledStars && hasHalfStar) {
      stars.push(
        <img key={i} src={halfStar} className={styles.star} alt="half star" />
      );
    } else {
      stars.push(
        <img key={i} src={emptyStar} className={styles.star} alt="empty star" />
      );
    }
  }

  return <div className={styles.starRating}>{stars}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number,
};

export default StarRating;
