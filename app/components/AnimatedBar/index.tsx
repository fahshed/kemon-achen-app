import React, { Component } from 'react';
import { Animated } from 'react-native';

interface Props {
  value: number;
  delay: number;
  color: string;
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
    const barStyles = {
      backgroundColor: this.props.color,
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
