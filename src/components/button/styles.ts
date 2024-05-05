import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 12,
    paddingVertical: 20,
    width: '80%',
  },
  containerDisable: {
    backgroundColor: 'lightgray',
  },
  title: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  titleDisable: {
    color: 'gray',
  },
});

export default styles;
