import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

function ErrorIndicator(): React.JSX.Element {
  return (
    <View style={styles.loadingErrorContainer}>
      <Text style={styles.errorText}>An error has occurred</Text>
    </View>
  );
}

export default ErrorIndicator;
