import { roundToStepSize, roundToTickSize } from '../../src/util/rounding';

describe.each([
  { name: 'roundToTickSize', round: roundToTickSize },
  { name: 'roundToStepSize', round: roundToStepSize },
])('$name', ({ round }) => {
  describe('issue #695', () => {
    it.each<[number, string, number]>([
      [1.23, '0.05', 1.2],
      [1.23, '0.05000000', 1.2],
      [23, '10', 20],
      [3.5, '2.5', 2.5],
      [0.3, '0.1', 0.3],
      [0.29, '0.01', 0.29],
    ])(
      'should round %p with increment %p to %p',
      (value, increment, expected) => {
        expect(round(value, increment)).toBe(expected);
      },
    );
  });

  describe('classic floating-point cases', () => {
    it.each<[number, string, number]>([
      [0.30000000000000004, '0.1', 0.3],
      [1.1, '0.1', 1.1],
      [0.0009, '0.0003', 0.0009],
      [4.35, '0.01', 4.35],
      [4.35, '0.01000000', 4.35],
    ])(
      'should round %p with increment %p to %p',
      (value, increment, expected) => {
        expect(round(value, increment)).toBe(expected);
      },
    );
  });

  describe('power-of-ten increments', () => {
    it.each<[number, string, number]>([
      [1.23456, '0.01', 1.23],
      [1.23456, '0.001', 1.234],
      [17.89, '1', 17],
      [17.89, '1.00000000', 17],
      [178.9, '10', 170],
      [0.123, '0.10', 0.1],
    ])(
      'should round %p with increment %p to %p',
      (value, increment, expected) => {
        expect(round(value, increment)).toBe(expected);
      },
    );
  });

  describe('non-power-of-ten increments', () => {
    it.each<[number, string, number]>([
      [1.3, '0.25', 1.25],
      [1.74, '0.25', 1.5],
      [19.99, '0.5', 19.5],
      [17, '5', 15],
      [0.04, '0.05', 0],
    ])(
      'should round %p with increment %p to %p',
      (value, increment, expected) => {
        expect(round(value, increment)).toBe(expected);
      },
    );
  });

  describe('already aligned values', () => {
    it.each<[number, string, number]>([
      [4.35, '0.01', 4.35],
      [1.25, '0.05', 1.25],
      [2.5, '2.5', 2.5],
      [20, '10', 20],
      [0.0003, '0.0001', 0.0003],
    ])(
      'should keep %p with increment %p at %p',
      (value, increment, expected) => {
        expect(round(value, increment)).toBe(expected);
      },
    );
  });

  describe('floor direction', () => {
    it.each<[number, string, number]>([
      [4.349, '0.01', 4.34],
      [1.2999, '0.05', 1.25],
      [9.99, '5', 5],
      [0.009, '0.01', 0],
    ])(
      'should floor %p with increment %p to %p',
      (value, increment, expected) => {
        expect(round(value, increment)).toBe(expected);
      },
    );
  });

  describe('very small steps', () => {
    it.each<[number, string, number]>([
      [0.123456789, '0.00000001', 0.12345678],
      [0.00000005, '0.00000001', 0.00000005],
    ])(
      'should round %p with increment %p to %p',
      (value, increment, expected) => {
        expect(round(value, increment)).toBe(expected);
      },
    );
  });

  describe('large values', () => {
    it.each<[number, string, number]>([
      [65432.129, '0.01', 65432.12],
      [123456789.987, '0.001', 123456789.987],
      [98765.4, '0.5', 98765],
    ])(
      'should round %p with increment %p to %p',
      (value, increment, expected) => {
        expect(round(value, increment)).toBe(expected);
      },
    );
  });

  describe('edge contract', () => {
    it.each<[number, string, number]>([
      [5.55, '', 5.55],
      [5.55, '0', 5.55],
      [5.55, '0.00000000', 5.55],
      [0, '0.05', 0],
    ])(
      'should keep %p with increment %p at %p',
      (value, increment, expected) => {
        expect(round(value, increment)).toBe(expected);
      },
    );
  });

  describe('number output without float noise', () => {
    it.each<[number, string, string]>([
      [0.3, '0.1', '0.3'],
      [1.23, '0.05', '1.2'],
      [0.29, '0.01', '0.29'],
    ])(
      'should format %p with increment %p as %p',
      (value, increment, expected) => {
        const result = round(value, increment);
        expect(typeof result).toBe('number');
        expect(String(result)).toBe(expected);
      },
    );
  });
});
