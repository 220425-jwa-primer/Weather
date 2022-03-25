import { TimeConverterPipe } from './time-converter.pipe';

describe('DegreeConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeConverterPipe();
    expect(pipe).toBeTruthy();
  });
});
