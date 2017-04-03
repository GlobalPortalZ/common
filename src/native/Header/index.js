import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

import Flex from '../Flex';
import styles from './styles';

class Header extends Component {

  renderTitle() {
    const { title, titleStyle } = this.props;
    if (!title) return null;
    if (typeof title === 'string') {
      return <Text style={[styles.title, titleStyle]}>{title}</Text>;
    }
    return title;
  }

  renderLeft() {
    const { left, center, navigation, absolute } = this.props;
    let content = left;

    // Only make it flex 1 if there is something in the center
    const flexValue = center ? 1 : undefined;

    if (!content) {
      return <Flex style={styles.sideWidth} value={flexValue} direction="row" justify="start" />;
    }

    return (
      <Flex value={flexValue} direction="row" justify="start">
        {content}
      </Flex>
    );
  }

  renderRight() {
    const { right, center } = this.props;
    let content = right;

    // Only make it flex 1 if there is something in the center
    const flexValue = center ? 1 : undefined;

    if (!content) {
      return <Flex style={styles.sideWidth} value={flexValue} direction="row" justify="end" />;
    }

    return (
      <Flex value={flexValue} direction="row" justify="end">
        {content}
      </Flex>
    );
  }

  renderCenter() {
    const { center } = this.props;
    if (!center) {
      return <View style={styles.sideWidth} />;
    }

    return (
      <Flex direction="row" justify="center" align="center">
        {center}
      </Flex>
    );
  }

  render() {
    const { absolute, style, center } = this.props;
    return (
      <View
        style={[
          styles.header,
          absolute ? styles.absolute : null,
          style,
        ]}
      >
        { this.renderLeft() }
        { center ? this.renderCenter() : this.renderTitle() }
        { this.renderRight() }
      </View>
    );
  }
}

Header.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  left: PropTypes.element,
  right: PropTypes.element,
  center: PropTypes.element,
  absolute: PropTypes.bool,
};

export default Header;
