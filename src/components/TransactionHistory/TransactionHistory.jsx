import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {items.map(item => (
          <tr key={item.id} className={styles.tr}>
            <td className={[styles.td, styles.capitalize].join(' ')}>
              {item.type}
            </td>
            <td className={[styles.td, styles.capitalize].join(' ')}>
              {item.amount}
            </td>
            <td className={[styles.td, styles.capitalize].join(' ')}>
              {item.currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
