import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import StoreProp from '../../interfaces/redux/StoreProp';
import {addTask} from '../../redux/slices/TasksSlice';

function Tasks(): React.JSX.Element {
  const {tasks} = useSelector((state: StoreProp) => state.tasks);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Tasks</Text>
      <Button title="New Task" />
    </View>
  );
}

export default Tasks;
