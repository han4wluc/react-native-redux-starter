
import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class Button extends Component {
  render() {
    const {
      style,
      textStyle,
      onPress,
      text,
    } = this.props;
    return (
      <TouchableOpacity
        style={{
          width: 100,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: 'black',
          borderWidth: 2,
          ...style
        }}
        onPress={onPress}
      >
        <Text style={textStyle}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;