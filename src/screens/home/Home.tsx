import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button} from '../../components';
import {RootStackParamList} from '../../interfaces';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

function Home(): React.JSX.Element {
  const {navigate} = useNavigation<HomeScreenProp>();

  return (
    <View style={styles.container}>
      <Button testID="tasks" onPress={() => navigate('Tasks')} title="Tasks" />
      <Button testID="list" onPress={() => navigate('List')} title="List" />
    </View>
  );
}

export default Home;
