import React from 'react';
import {FlatList, View} from 'react-native';
import useGetElements from '../../hooks/useGetElements';
import Spinner from './Spinner';
import ErrorIndicator from './ErrorIndicator';
import ListItem from './ListItem';
import styles from './styles';

function List(): React.JSX.Element {
  const {elements, isError, isLoading} = useGetElements();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorIndicator />;
  }

  return (
    <View>
      <FlatList
        testID="flatList"
        contentContainerStyle={styles.flatList}
        data={elements}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListItem avatar={item.avatar} name={item.name} />
        )}
      />
    </View>
  );
}

export default List;
