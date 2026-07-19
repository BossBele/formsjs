import { describe, it, expect } from 'vitest';
import {
  normalizeConfig,
  createDefaultValues,
  getFieldState,
  coercePattern,
} from '../';

describe('core', () => {
  it('normalizes an array of fields', () => {
    const fields = [{ name: 'email', type: 'email' }];
    const config = normalizeConfig(fields);
    expect(config.fields).toHaveLength(1);
    expect(config.fields[0].name).toBe('email');
  });

  it('normalizes a wrapped form config', () => {
    const input = { title: 'Login', fields: [{ name: 'email', type: 'email' }] };
    const config = normalizeConfig(input);
    expect(config.title).toBe('Login');
    expect(config.fields).toHaveLength(1);
  });

  it('throws on invalid config', () => {
    expect(() => normalizeConfig({})).toThrow('form-os: config must be');
  });

  it('creates default values', () => {
    const fields = [
      { name: 'name', type: 'text' },
      { name: 'age', type: 'number' },
      { name: 'active', type: 'switch' },
    ];
    const defaults = createDefaultValues(fields);
    expect(defaults.name).toBe('');
    expect(defaults.age).toBe('');
    expect(defaults.active).toBe(false);
  });

  it('evaluates show/hide dependencies', () => {
    const field = {
      name: 'details',
      type: 'text',
      dependencies: [
        { name: 'showDetails', value: true, type: 'show' as const },
      ],
    };
    expect(getFieldState(field, { showDetails: true }).visible).toBe(true);
    expect(getFieldState(field, { showDetails: false }).visible).toBe(false);
  });

  it('coerces pattern strings to RegExp', () => {
    const pattern = coercePattern('^[a-z]+$');
    expect(pattern).toBeInstanceOf(RegExp);
    expect(pattern!.test('abc')).toBe(true);

    const regex = coercePattern(/^[a-z]+$/);
    expect(regex).toBeInstanceOf(RegExp);
    expect(regex!.test('ABC')).toBe(false);
    expect(coercePattern('[')).toBeUndefined();
  });
});
