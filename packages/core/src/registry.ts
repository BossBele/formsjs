import type { FieldRegistry } from './types';

export function createFieldRegistry<T>(
  defaults: FieldRegistry<T>,
  overrides?: FieldRegistry<T>
): FieldRegistry<T> {
  return { ...defaults, ...(overrides ?? {}) };
}
