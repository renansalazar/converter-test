jest.mock('./__mocks__/request');
import {getConverter} from '../../services/converter'

describe('Home component', () => {
    test('works with service', () => {
        expect.assertions(1);
        return getConverter(2).then(data => expect(data).toEqual(8.40));
    });
});