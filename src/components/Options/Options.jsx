import PropTypes from 'prop-types';
import css from './options.module.css';

const Options = ({ feedback, total, reset }) => {
  return (
    <div className={css.containerBtn}>
      <button className={css.button} onClick={() => feedback('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => feedback('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => feedback('bad')}>
        Bad
      </button>
      {total ? (
        <button className={css.button} onClick={reset}>
          Reset
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

// Валідація //

Options.propTypes = {
  feedback: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Options;
