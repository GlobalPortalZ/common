import React, { PropTypes } from 'react';
import styles from './styles.css';

const BLANK_TEXT = '______';
export function LoadingTextBar() {
  return <span className={styles.loadingBar}>{BLANK_TEXT}</span>;
}

export function LoadingTextBars({ num, ...rest }) {
  const arr = new Array(num).fill(1); // Create an array with `num` spaces in it
  return (
    <span {...rest}>
      { arr.map((v, k) => <LoadingTextBar key={`LoadingTextBar_${k}`} />) }
    </span>
  );
}

function LoadingText({ isLoading, value, bars = 1, ...rest }) {
  if (isLoading && typeof value === 'undefined') {
    return <LoadingTextBars num={bars} {...rest} />;
  }
  return <span {...rest}>{value}</span>;
}

LoadingText.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bars: PropTypes.number,
};

LoadingTextBars.propTypes = {
  num: PropTypes.number.isRequired,
};

export default LoadingText;
