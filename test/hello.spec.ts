import {describe, expect, test} from "@jest/globals";
import {Hello} from "../src/hello";

describe('hello', () => {
    test('say hello john', () => {
        expect(new Hello().say()).toBe('hello')
    });
});