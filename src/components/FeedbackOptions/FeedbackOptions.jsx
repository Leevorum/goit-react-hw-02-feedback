import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => {
        return (
          <button
            key={option}
            className={s.button}
            type="button"
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {capitalizeStr(option)}
          </button>
        );
      })}
    </>
  );
}
function capitalizeStr(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
