const reverse = require('./index');

describe.skip('Reverse String', () => {
  it('Reverse function exists', () => {
    expect(reverse).toBeDefined();
  });
  
  it('Reverse reverses a string', () => {
    expect(reverse('abcd')).toEqual('dcba');
  });
  
  it('Reverse reverses a string', () => {
    expect(reverse('  abcd')).toEqual('dcba  ');
  });

  it('Reverse function exists', () => {
    expect(reverse2).toBeDefined();
  });

  it('Reverse reverses a string', () => {
    expect(reverse2('abcd')).toEqual('dcba');
  });

  it('Reverse reverses a string', () => {
    expect(reverse2('  abcd')).toEqual('dcba  ');
  });

  it('Reverse function exists', () => {
    expect(reverse2).toBeDefined();
  });

  it('Reverse reverses a string', () => {
    expect(reverse3('abcd')).toEqual('dcba');
  });

  it('Reverse reverses a string', () => {
    expect(reverse3('  abcd')).toEqual('dcba  ');
  });
})


