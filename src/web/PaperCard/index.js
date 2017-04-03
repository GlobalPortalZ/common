import React, { PropTypes } from 'react';

import styles from './styles.css';
import Flex from '../Flex';

// TODO: Put different elevation levels on this
function PaperCard({ children, className = '', ...rest }) {
  return (
    <Flex {...rest} className={`${styles.paperCard} ${className}`}>
      {children}
    </Flex>
  );
}

PaperCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default PaperCard;
