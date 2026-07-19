import type { FieldConfig, FormConfig } from './types';

export function normalizeConfig(
  config: FieldConfig[] | Partial<FormConfig> | unknown
): FormConfig {
  if (Array.isArray(config)) {
    return { fields: config as FieldConfig[] };
  }
  if (config && typeof config === 'object') {
    const c = config as Partial<FormConfig>;
    if (Array.isArray(c.fields)) {
      return {
        validationMode: c.validationMode ?? 'onTouched',
        reValidateMode: c.reValidateMode ?? 'onChange',
        fields: c.fields,
      };
    }
  }
  throw new Error(
    'form-os: config must be a FieldConfig[] or { fields: FieldConfig[] }'
  );
}

export function getDefaultValue(field: FieldConfig): any {
  if (field.defaultValue !== undefined) return field.defaultValue;
  switch (field.type) {
    case 'switch':
    case 'checkbox':
      return false;
    case 'select':
      return field.props?.multiple ? [] : '';
    case 'date':
      return '';
    default:
      return '';
  }
}

export function createDefaultValues(fields: FieldConfig[]): Record<string, any> {
  const defaults: Record<string, any> = {};
  for (const field of fields) {
    defaults[field.name] = getDefaultValue(field);
  }
  return defaults;
}
