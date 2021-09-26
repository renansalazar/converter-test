import React from 'react';
import {render, screen} from '@testing-library/react';
import Button from './Button';

describe('button component', () => {
    test('text in button', () => {
      render(
        <Button data-testid="converterButton" />
      )

      const el = screen.queryByTestId("converterButton")

      expect(el.textContent).toEqual("Convertir")

      /*       
        const {queryByLabelText, getByLabelText} = render(
          <CheckboxWithLabel labelOn="On" labelOff="Off" />,
        );
      
      
        fireEvent.click(getByLabelText(/off/i));
      
        expect(queryByLabelText(/on/i)).toBeTruthy(); 
      */
    });
});