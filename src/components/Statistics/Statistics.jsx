import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat__list}>
        {stats.map(stat => {
          return (
            <li className={css.stat__item} key={stat.id}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    performance: PropTypes.number,
  }),
};
