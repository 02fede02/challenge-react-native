import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  screen,
} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import '@testing-library/jest-native/extend-expect';
import store from '../../src/redux/Store';
import {Tasks} from '../../src/screens';

test('Add task and verify it appears in the list', async () => {
  render(
    <Provider store={store}>
      <Tasks />
    </Provider>,
  );

  fireEvent.press(screen.getByTestId('newTask'));

  const newTaskName = 'New Task Name';
  fireEvent.changeText(
    screen.getByPlaceholderText('New Task Name'),
    newTaskName,
  );

  fireEvent.press(screen.getByText('Add'));

  await waitFor(() => {
    expect(screen.getByText(newTaskName)).toBeTruthy();
  });
});
