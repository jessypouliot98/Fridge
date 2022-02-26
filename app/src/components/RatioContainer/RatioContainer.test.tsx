import {getRatio, RatioType} from "./RatioContainer";

describe('RatioContainer', () => {
  describe('getRatio', () => {
    it.each<[RatioType, number]>([
      [[16,9], 0.5625],
      [[1, 1], 1],
    ])('returns expected value', (ratio, expectedValue) => {
      expect(getRatio(ratio)).toBe(expectedValue);
    })
  });
});
