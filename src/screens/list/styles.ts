import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loadingErrorContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  flatList: {
    gap: 20,
    paddingVertical: 50,
    paddingHorizontal: 15,
  },
  itemName: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  avatar: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'olive',
    backgroundColor: 'lightgreen',
    height: 60,
    width: 60,
  },
  errorText: {
    color: 'red',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default styles;
