import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
    test('button activate when set input value', () => {
      render(
        <Home data-testid="converterResult" />
      )

      const el = screen.queryByTestId("converterInput")
      const elButton = screen.queryByTestId("converterButton")
      fireEvent.change(el, {target: {value: '3'}})
      expect(elButton.hasAttribute("disabled")).toBeFalsy()
    });
    test('button disabled when set input value 0', () => {
      render(
        <Home data-testid="converterResult" />
      )

      const el = screen.queryByTestId("converterInput")
      const elButton = screen.queryByTestId("converterButton")
      fireEvent.change(el, {target: {value: '0'}})
      expect(elButton.hasAttribute("disabled")).toBeTruthy()
    });
});