import React, { PropTypes } from 'react';

function Flex({ value, direction, align, justify, self, grow, wrap, children, style = {}, ...rest }) {
  let styleObj = {};
  if (value) styleObj.flex = value;
  if (direction) styleObj.flexDirection = direction;
  if (wrap) styleObj.flexWrap = wrap;
  if (grow) styleObj.flexGrow = grow;

  if (align) {
    if (align === 'center') styleObj.alignItems = 'center';
    else if (align === 'start') styleObj.alignItems = 'flex-start';
    else if (align === 'end') styleObj.alignItems = 'flex-end';
    else if (align === 'stretch') styleObj.alignItems = 'stretch';
  }
  if (self) {
    if (self === 'center') styleObj.alignSelf = 'center';
    else if (self === 'start') styleObj.alignSelf = 'flex-start';
    else if (self === 'end') styleObj.alignSelf = 'flex-end';
    else if (self === 'stretch') styleObj.alignSelf = 'stretch';
    else if (self === 'baseline') styleObj.alignSelf = 'baseline';
  }
  if (justify) {
    if (justify === 'center') styleObj.justifyContent = 'center';
    else if (justify === 'start') styleObj.justifyContent = 'flex-start';
    else if (justify === 'end') styleObj.justifyContent = 'flex-end';
    else if (justify === 'around') styleObj.justifyContent = 'space-around';
    else if (justify === 'between') styleObj.justifyContent = 'space-between';
  }
  if (justify) {
    styleObj.justifyContent = justify === 'center' ? 'center' : `flex-${justify}`;
  }
  return (
    <div {...rest} style={styleObj}>
      {children}
    </div>
  );
}

Flex.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  value: PropTypes.number,
  grow: PropTypes.number,
  direction: PropTypes.oneOf(['row', 'column']),
  wrap: PropTypes.oneOf(['wrap', 'wrap-reverse', 'nowrap']),
  align: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),
  justify: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between']),
  self: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),
};

export default Flex;
