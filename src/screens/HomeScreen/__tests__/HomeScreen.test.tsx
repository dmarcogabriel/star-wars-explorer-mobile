import React from 'react';
import HomeScreen from '../HomeScreen';
import {renderWithTheme} from '@helpers/setupTestHelper';

describe('Home', () => {
  it('aaa', () => {
    const {findByTestId, debug} = renderWithTheme(<HomeScreen />);

    expect(findByTestId('homeScreen')).toBeTruthy();
  });
});
