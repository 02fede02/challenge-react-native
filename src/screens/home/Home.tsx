import React from 'react';
import {Button, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import RootStackParamList from '../../interfaces/navigation/RootStackParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

function Home(): React.JSX.Element {
  const {navigate} = useNavigation<HomeScreenProp>();

  return (
    <View style={styles.container}>
      <Button title="Tasks" onPress={() => navigate('Tasks')} />
      <Button title="List" onPress={() => navigate('List')} />
    </View>
  );
}

export default Home;
