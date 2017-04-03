import React, { PropTypes } from 'react';
import moment from 'moment';
import Text from '../Text';

export default function DateComponent({ date, type, format, ...rest }) {
  // Moment formatting stuff: see http://momentjs.com/docs/#/parsing/string-format/
  let text;
  if (format) {
    text = moment(date).format(format);
  } else {
    text = moment(date).format('ddd, lll');
  }
  return (
    <Text {...rest}>
      {text}
    </Text>
  );
}

DateComponent.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  type: PropTypes.oneOf(['long', 'short']),
  format: PropTypes.string,
};
