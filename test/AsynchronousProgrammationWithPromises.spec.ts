import {beforeEach, describe, expect, test} from "@jest/globals";
import {Console} from '../src/Console'

const __ = 'FILL ME IN';

describe('Asynchronous programmation with promises', () => {
    beforeEach(() => {
        Console.clear();
    })
    test('Synchronous programmation is executed immediately', () => {

        Console.log('Hello')
        Console.log(__)

        expect(Console.messages).toEqual([
            'T0 - Hello',
            'T0 - Mathieu',
            'T0 - you will soon have a gift'
        ])
    });

    test('Asynchronous programmation with set timeout', (done) => {
        Console.log('Hello')
        setTimeout(() => {
            Console.log('Mathieu')

            expect(Console.messages).toEqual([
                'T0 - Hello',
                'T0+2s - Mathieu'
            ]);
            done();
        }, 2000)
    });
});