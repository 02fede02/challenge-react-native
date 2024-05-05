import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    gap: 20,
  },
  list: {
    paddingBottom: 50,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    paddingStart: 15,
  },
  listText: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'black',
    paddingVertical: 10,
    width: '95%',
    borderBottomWidth: 0,
  },
  lastText: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 60,
    paddingHorizontal: 20,
    gap: 20,
    width: '90%',
  },
  input: {
    fontSize: 22,
    color: 'black',
    borderColor: 'black',
    borderRadius: 12,
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 20,
    width: '100%',
  },
  modalButton: {
    width: '100%',
  },
});

export default styles;
