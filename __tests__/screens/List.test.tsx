import {render, screen, waitFor} from '@testing-library/react-native';
import {List} from '../../src/screens';
import React from 'react';

test('Should return a list of elements', async () => {
  const mockResults = [
    {id: '1', name: 'Elemento 1', avatar: 'avatar1.png'},
    {id: '2', name: 'Elemento 2', avatar: 'avatar2.png'},
  ];

  jest.mock('../../src/hooks/useGetElements.tsx', () => () => ({
    elements: mockResults,
    isError: false,
    isLoading: false,
  }));

  render(<List />);

  await waitFor(() => {
    expect(screen.getByTestId('flatList')).toBeOnTheScreen();
  });
});
