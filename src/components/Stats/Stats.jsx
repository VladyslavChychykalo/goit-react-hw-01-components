import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

export default function Stats({ title, stats }) {
  return (
    <section className={styles.statsWrapper}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.list}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={styles.item}
            style={{
              backgroundColor: `#${Math.floor(Math.random() * 1000000)}`,
            }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Stats.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
