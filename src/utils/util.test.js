import { getStringFromObject } from './index';

describe('#getStringFromObject', () => {

  function testRunner() {
    getStringFromObject({});
  }

  test('Expect #getStringFromObject to throw error if arguments are not passed', () => {

    expect(testRunner).toThrow('Invalid arguments.');

  });

  test('Expect #getStringFromObject to return required formatted string', () => {

    let testArguments = {
      object: { a: 'second', b: 'fourth', c: 1, d: 'third' },
      keyOrder: ['c', 'a', 'd', 'b']
    }

    expect(getStringFromObject(testArguments))
      .toBe('1 second third fourth');

  });

  test('Expect #getStringFromObject to return required formatted string with separator', () => {

    let testArguments = {
      object: { a: 'second', b: 'fourth', c: 1, d: 'third' },
      keyOrder: ['c', 'a', 'd', 'b'],
      separator: ', '
    }

    expect(getStringFromObject(testArguments))
      .toBe('1, second, third, fourth');

  });

});