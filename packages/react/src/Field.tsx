import { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import type { ComponentType } from 'react';
import {
  getFieldState,
  getValidationRules,
  coercePattern,
  getDefaultValue,
  type FieldConfig,
} from '@form-os/core';

export interface FieldProps {
  field: FieldConfig;
  components: Record<string, ComponentType<any>>;
  [key: string]: any;
}

export function Field({ field, components, ...rest }: FieldProps) {
  const control = control;
  const Component = components[field.type] ?? components['text'];
  if (!Component) {
    throw new Error(`No component registered for field type "${field.type}"`);
  }

  const values = ctx.watch();
  const state = useMemo(
    () => getFieldState(field, values as Record<string, any>),
    [field, values]
  );

  if (!state.visible) {
    return null;
  }

  return (
    <Controller
      name={field.name}
      control={control}
      rules={field.rules}
      defaultValue={field.defaultValue}
      render={({ field: f, fieldState }) => (
        <Component
          formField={f}
          fieldConfig={field}
          fieldState={state}
          error={fieldState.error}
          disabled={state.disabled}
          {...rest}
        />
      )}
    />
  );
}
