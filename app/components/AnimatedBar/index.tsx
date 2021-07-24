import React, { Component } from 'react';
import { Animated } from 'react-native';

import { theme } from '../../config';

interface Props {
  value: number;
  delay: number;
  opacity: number;
}

class AnimatedBar extends Component<Props> {
  _height: Animated.Value;

  constructor(props) {
    super(props);
    this._height = new Animated.Value(0);
  }

  componentDidMount() {
    this.animateTo(this.props.delay, this.props.value);
  }

  componentDidUpdate(nextProps) {
    this.animateTo(nextProps.delay, nextProps.value);
  }

  animateTo = (delay, value) => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(this._height, {
        toValue: value,
        useNativeDriver: false,
      }),
    ]).start();
  };

  render() {
    const score = this.props.value;
    let color;
    if (score >= 0 && score <= 70) {
      color = theme.green;
    } else if (score > 70 && score <= 140) {
      color = theme.orange;
    } else if (score > 140 && score <= 200) {
      color = theme.red;
    }

    const barStyles = {
      backgroundColor: color,
      width: 30,
      height: this._height,
      opacity: this.props.opacity,
      borderBottomRightRadius: 16,
      borderBottomLeftRadius: 16,
    };

    return <Animated.View style={[barStyles]} />;
  }
}

export default AnimatedBar;
