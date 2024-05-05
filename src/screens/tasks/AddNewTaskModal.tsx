import React, {Dispatch, SetStateAction} from 'react';
import {Modal, TextInput, View} from 'react-native';
import styles from './styles';
import {Button} from '../../components';

type Props = {
  handleAddTask: () => void;
  handleCloseModal: () => void;
  newTask: string;
  setNewTask: Dispatch<SetStateAction<string>>;
  showAddNewTask: boolean;
};

function AddNewTaskModal({
  handleAddTask,
  handleCloseModal,
  newTask,
  setNewTask,
  showAddNewTask,
}: Props): React.JSX.Element {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showAddNewTask}
      onRequestClose={handleCloseModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <TextInput
            value={newTask}
            placeholder="New Task Name"
            onChangeText={setNewTask}
            maxLength={30}
            style={styles.input}
          />
          <Button
            title="Add"
            disable={newTask.length < 1}
            onPress={handleAddTask}
            style={styles.modalButton}
          />
        </View>
      </View>
    </Modal>
  );
}

export default AddNewTaskModal;
