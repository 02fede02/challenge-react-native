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
      <View style={styles.buttonContainer}>
        <Button title="Tasks" onPress={() => navigate('Tasks')} />
        <Button title="List" onPress={() => navigate('List')} />
      </View>
    </View>
  );
}

export default Home;
