import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

function Spinner(): React.JSX.Element {
  return (
    <View style={styles.loadingErrorContainer}>
      <ActivityIndicator size={'large'} color={'black'} />
    </View>
  );
}

export default Spinner;
