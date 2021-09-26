import React from 'react';
import {render, screen} from '@testing-library/react';
import Result from './Result';
import {formatearNumero} from '../../utils/formatedNumber'

describe('Resut component', () => {
    test('message before converter first time', () => {
      render(
        <Result data-testid="converterResult" valueConverter={'0'} chance={0} />
      )

      const el = screen.queryByTestId("converterResult")

      expect(el.textContent).toEqual("Ingrese un valor y presione Convertir")
    });
    test('message after converter', () => {
      const valueConvert = '2.25'
      render(
        <Result data-testid="converterResult" valueConverter={valueConvert} chance={1} />
      )
      const el = screen.queryByTestId("converterResult")
      expect(el.querySelector('p').textContent).toEqual(formatearNumero(valueConvert))
    });
});