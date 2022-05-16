import { CountableNumber } from './countable-number.pipe';

describe('CountableNumber', () => {
  it('create an instance', () => {
    const pipe = new CountableNumber();
    expect(pipe).toBeTruthy();
  });
});
