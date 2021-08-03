import React from 'react';
import {render, screen} from '@testing-library/react';
import Button from './Button';

describe('button component', () => {
    test('event onclick dispatch function', () => {
      render(
        <Button data-testid="converterButton" />
      )

      const el = screen.queryByTestId("converterButton")

      expect(el).toHaveTextContent("Convertir")

      /*       
        const {queryByLabelText, getByLabelText} = render(
          <CheckboxWithLabel labelOn="On" labelOff="Off" />,
        );
      
      
        fireEvent.click(getByLabelText(/off/i));
      
        expect(queryByLabelText(/on/i)).toBeTruthy(); 
      */
    });
});