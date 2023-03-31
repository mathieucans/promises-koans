import {beforeEach, describe, expect, test} from "@jest/globals";
import {Console} from '../src/Console'

const __ = 'FIL ME IN';
describe('Asynchronous programmation with promises', () => {
    beforeEach(() => {
        Console.clear();
    })
    test('Synchronous programmation is executed immediately', () => {

        Console.log('Hello')
        Console.log(__)

        expect(Console.messages).toEqual([
            'Hello',
            'Mathieu',
            'you will soon have a gift'
        ])
    });
});