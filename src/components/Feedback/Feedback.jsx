import PropTypes from 'prop-types';
import css from './feedback.module.css';

const Feedback = ({ state, total, positive }) => {
  return (
    <div>
      <p className={css.feedbackItem}>
        Good: <span>{state.good}</span>
      </p>
      <p className={css.feedbackItem}>
        Neutral: <span>{state.neutral}</span>
      </p>
      <p className={css.feedbackItem}>
        Bad: <span>{state.bad}</span>
      </p>
      <p className={css.feedbackItem}>
        Total: <span>{total}</span>
      </p>
      <p className={css.feedbackItem}>
        Positive: <span>{positive}%</span>
      </p>
    </div>
  );
};
//валідація//

Feedback.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Feedback;
