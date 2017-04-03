import React, { PropTypes } from 'react';

import styles from './styles.css';

function Badge({ count, size = 20, className = '' }) {
  const style = {
    width: size,
    height: size,
  };
  return (
    <div className={`${styles.badge} ${className}`} style={style}>
      {count}
    </div>
  );
}

Badge.propTypes = {
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};

export default Badge;
