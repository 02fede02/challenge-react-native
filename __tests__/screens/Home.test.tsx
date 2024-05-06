import * as React from 'react';
import {
  screen,
  render,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from '../../src/navigation/Navigation';
import {Provider} from 'react-redux';
import store from '../../src/redux/Store';

test('Shows Tasks screen when Tasks button is pressed', () => {
  render(
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>,
  );

  fireEvent.press(screen.getByTestId('tasks'));

  expect(screen.getByTestId('newTask')).toBeOnTheScreen();
});

const mockData = [
  {id: '1', name: 'Elemento 1', avatar: 'avatar1.png'},
  {id: '2', name: 'Elemento 2', avatar: 'avatar2.png'},
];

test('Shows List screen when List button is pressed', async () => {
  render(
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>,
  );

  jest.mock('../../src/hooks/useGetElements.tsx', () => () => ({
    elements: mockData,
    isError: false,
    isLoading: false,
  }));

  fireEvent.press(screen.getByTestId('list'));

  await waitFor(() => {
    expect(screen.getByTestId('flatList')).toBeOnTheScreen();
  });
});
