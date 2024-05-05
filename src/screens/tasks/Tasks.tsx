import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import StoreProp from '../../interfaces/redux/StoreProp';
import {addTask} from '../../redux/slices/TasksSlice';
import AddNewTaskModal from './AddNewTaskModal';
import {Button} from '../../components';
import styles from './styles';

function Tasks(): React.JSX.Element {
  const [showAddNewTask, setShowAddNewTask] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<string>('');
  const {tasks} = useSelector((state: StoreProp) => state.tasks);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setShowAddNewTask(false);
  };

  const handleAddTask = () => {
    dispatch(addTask(newTask));
    setShowAddNewTask(false);
    setNewTask('');
  };

  return (
    <View style={styles.container}>
      <Button title="New Task" onPress={() => setShowAddNewTask(true)} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        contentContainerStyle={styles.list}
        renderItem={({item, index}) => (
          <Text
            key={index}
            style={[
              styles.text,
              styles.listText,
              index === tasks.length - 1 && styles.lastText,
            ]}>
            {item}
          </Text>
        )}
        ListEmptyComponent={<Text style={styles.text}>Create a new task</Text>}
      />
      <AddNewTaskModal
        handleAddTask={handleAddTask}
        handleCloseModal={handleCloseModal}
        newTask={newTask}
        setNewTask={setNewTask}
        showAddNewTask={showAddNewTask}
      />
    </View>
  );
}

export default Tasks;
