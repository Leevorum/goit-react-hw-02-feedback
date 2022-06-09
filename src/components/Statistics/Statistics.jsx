import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ stats, total, positivePercentage }) {
  return (
    <ul>
      {stats.map(([name, value]) => {
        return (
          <li className={s.text}>
            {name}: {value} %
          </li>
        );
      })}
    </ul>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }),
  ).isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
