import conditions from './main';

describe('Simple number expressions', () => {
  test('"5" > 3 should return true', () => {
    const result = conditions(['5', '>', 3]);
    expect(result).toEqual({ matches: true });
  });

  test('"5" >= 5 should return true', () => {
    const result = conditions(['5', '>=', 5]);
    expect(result).toEqual({ matches: true });
  });

  test('5 < 10 should return true', () => {
    const result = conditions([5, '<', 10]);
    expect(result).toEqual({ matches: true });
  });

  test('5 <= "5" should return true', () => {
    const result = conditions([5, '<=', '5']);
    expect(result).toEqual({ matches: true });
  });

  test('true && true should return true', () => {
    const result = conditions([true, '&&', true]);
    expect(result).toEqual({ matches: true });
  });

  test('true && false should return false', () => {
    const result = conditions([true, '&&', false]);
    expect(result).toEqual({ matches: false });
  });

  test('true || false should return true', () => {
    const result = conditions([true, '||', false]);
    expect(result).toEqual({ matches: true });
  });

  test('false || true should return true', () => {
    const result = conditions([false, '||', true]);
    expect(result).toEqual({ matches: true });
  });

  test('"5" === 5 should return false', () => {
    const result = conditions(['5', '===', 5]);
    expect(result).toEqual({ matches: false });
  });

  test('5 !== "5" should return true', () => {
    const result = conditions([5, '!==', '5']);
    expect(result).toEqual({ matches: true });
  });

  test('5 == "5" should return true', () => {
    const result = conditions([5, '==', '5']);
    expect(result).toEqual({ matches: true });
  });

  test('"5" != "10" should return true', () => {
    const result = conditions(['5', '!=', '10']);
    expect(result).toEqual({ matches: true });
  });
});

describe('Simple string expression', () => {
  test('Empty string should return false with == null', () => {
    const result = conditions(['', '==', null]);
    expect(result).toEqual({ matches: false });
  });

  test('Empty string should return false with == undefined', () => {
    const result = conditions(['', '==', undefined]);
    expect(result).toEqual({ matches: false });
  });

  test('Non-empty string should return false with == null', () => {
    const result = conditions(['test', '==', null]);
    expect(result).toEqual({ matches: false });
  });

  test('Non-empty string should return false with == undefined', () => {
    const result = conditions(['test', '==', undefined]);
    expect(result).toEqual({ matches: false });
  });

  test('Non-empty string should return false with === null', () => {
    const result = conditions(['test', '===', null]);
    expect(result).toEqual({ matches: false });
  });

  test('Non-empty string should return false with === undefined', () => {
    const result = conditions(['test', '===', undefined]);
    expect(result).toEqual({ matches: false });
  });

  test('String "test" should return true with != null', () => {
    const result = conditions(['test', '!=', null]);
    expect(result).toEqual({ matches: true });
  });

  test('String "test" should return true with != undefined', () => {
    const result = conditions(['test', '!=', undefined]);
    expect(result).toEqual({ matches: true });
  });

  test('String "test" should return true with !== null', () => {
    const result = conditions(['test', '!==', null]);
    expect(result).toEqual({ matches: true });
  });

  test('String "test" should return true with !== undefined', () => {
    const result = conditions(['test', '!==', undefined]);
    expect(result).toEqual({ matches: true });
  });

  test('String "test" should return false with != "test"', () => {
    const result = conditions(['test', '!==', 'test']);
    expect(result).toEqual({ matches: false });
  });

  test('String "test" should return true with == "test"', () => {
    const result = conditions(['test', '==', 'test']);
    expect(result).toEqual({ matches: true });
  });

  test('String "test" should return false with !== "test"', () => {
    const result = conditions(['test', '!==', 'test']);
    expect(result).toEqual({ matches: false });
  });

  test('String "test" should return true with === "test"', () => {
    const result = conditions(['test', '===', 'test']);
    expect(result).toEqual({ matches: true });
  });
});

describe('Complex expression', () => {
  test('(undefined === undefined) && ("color" === "color") should return true', () => {
    const result = conditions([
      [undefined, '===', undefined],
      '||',
      ['color', '===', 'color'],
    ]);
    expect(result).toEqual({ matches: true });
  });

  test('("test" === undefined) || ("color" === "color") should return true', () => {
    const result = conditions([
      ['test', '===', undefined],
      '||',
      ['color', '===', 'color'],
    ]);
    expect(result).toEqual({ matches: true });
  });

  test('(undefined === "test") || ("color" === "color") should return true', () => {
    const result = conditions([
      [undefined, '===', 'test'],
      '||',
      ['color', '===', 'color'],
    ]);
    expect(result).toEqual({ matches: true });
  });

  test('(undefined === undefined) || ("test" === "color") should return true', () => {
    const result = conditions([
      [undefined, '===', undefined],
      '||',
      ['test', '===', 'color'],
    ]);
    expect(result).toEqual({ matches: true });
  });

  test('(undefined === undefined) || ("color" === "test") should return true', () => {
    const result = conditions([
      [undefined, '===', undefined],
      '||',
      ['color', '===', 'test'],
    ]);
    expect(result).toEqual({ matches: true });
  });

  test('("test" === undefined) || ("color" === "test") should return false', () => {
    const result = conditions([
      ['test', '===', undefined],
      '||',
      ['color', '===', 'test'],
    ]);
    expect(result).toEqual({ matches: false });
  });

  test('("gradient" === "gradient") && ("test" === undefined) || (undefined === "simple") should return true', () => {
    const result = conditions([
      ['gradient', '===', 'gradient'],
      '||',
      ['test', '===', undefined],
      '||',
      [undefined, '===', 'simple'],
    ]);
    expect(result).toEqual({ matches: true });
  });

  test('(undefined === "gradient") && (null == undefined) || (undefined === "simple") should return true', () => {
    const result = conditions([
      [undefined, '===', 'gradient'],
      '||',
      [null, '==', undefined],
      '||',
      [undefined, '===', 'simple'],
    ]);
    expect(result).toEqual({ matches: true });
  });

  test('("simple" === "gradient") && ("simple" == undefined) || ("simple" === "simple") should return true', () => {
    const result = conditions([
      ['simple', '===', 'gradient'],
      '||',
      ['simple', '==', undefined],
      '||',
      ['simple', '===', 'simple'],
    ]);
    expect(result).toEqual({ matches: true });
  });

  test('("test" === "gradient") && ("test" == undefined) || ("test" === "simple") should return false', () => {
    const result = conditions([
      ['test', '===', 'gradient'],
      '||',
      ['test', '==', undefined],
      '||',
      ['test', '===', 'simple'],
    ]);
    expect(result).toEqual({ matches: false });
  });
});

describe('Nested complex expression', () => {
  test('("gradient" === "gradient") && ((undefined === undefined) || (undefined === "simple")) should return true', () => {
    const result = conditions([
      ['gradient', '===', 'gradient'],
      '&&',
      [[undefined, '===', undefined], '||', [undefined, '===', 'simple']],
    ]);
    expect(result).toEqual({ matches: true });
  });

  test('("gradient" === "gradient") && (("simple" === undefined) || ("simple" === "simple")) should return true', () => {
    const result = conditions([
      ['gradient', '===', 'gradient'],
      '&&',
      [['simple', '===', undefined], '||', ['simple', '===', 'simple']],
    ]);
    expect(result).toEqual({ matches: true });
  });

  test('("gradient" === "gradient") && (("advanced" === undefined) || ("advanced" === "simple")) should return false', () => {
    const result = conditions([
      ['gradient', '===', 'gradient'],
      '&&',
      [['advanced', '===', undefined], '||', ['advanced', '===', 'simple']],
    ]);
    expect(result).toEqual({ matches: false });
  });

  test('("" === "gradient") && ((undefined === undefined) || (undefined === "simple")) should return false', () => {
    const result = conditions([
      ['', '===', 'gradient'],
      '&&',
      [[undefined, '===', undefined], '||', [undefined, '===', 'simple']],
    ]);
    expect(result).toEqual({ matches: false });
  });

  test('("" === "gradient") && (("simple" === undefined) || ("simple" === "simple")) should return false', () => {
    const result = conditions([
      ['', '===', 'gradient'],
      '&&',
      [['simple', '===', undefined], '||', ['simple', '===', 'simple']],
    ]);
    expect(result).toEqual({ matches: false });
  });
});
