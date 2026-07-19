import type { FieldConfig, ValidationRules } from './types';

export function getValidationRules(field: FieldConfig): ValidationRules {
  return field.rules ?? {};
}

export function coercePattern(pattern?: string | RegExp): RegExp | undefined {
  if (pattern === undefined || pattern === null) return undefined;
  if (pattern instanceof RegExp) return pattern;
  if (typeof pattern === 'string' && pattern.length > 0) {
    try {
      return new RegExp(pattern);
    } catch {
      return undefined;
    }
  }
  return undefined;
}
