import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  onPress: () => void;
  disable?: boolean;
  style?: ViewStyle;
};

function Button({
  title,
  onPress,
  disable = false,
  style,
}: Props): React.JSX.Element {
  return (
    <TouchableOpacity
      style={[styles.container, {...style}, disable && styles.containerDisable]}
      onPress={onPress}
      disabled={disable}>
      <Text style={[styles.title, disable && styles.titleDisable]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
