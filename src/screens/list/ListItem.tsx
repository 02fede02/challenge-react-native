import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

type Props = {
  name: string;
  avatar: string;
};

function ListItem({name, avatar}: Props): React.JSX.Element {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{name}</Text>
      <Image source={{uri: avatar}} style={styles.avatar} />
    </View>
  );
}

export default ListItem;
