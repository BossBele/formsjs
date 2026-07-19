import { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import type { ComponentType } from 'react';
import {
  getFieldState,
  getValidationRules,
  coercePattern,
  getDefaultValue,
  type FieldConfig,
} from '@formsjs/core';

export interface FieldProps {
  field: FieldConfig;
  components: Record<string, ComponentType<any>>;
  [key: string]: any;
}

export function Field({ field, components, ...rest }: FieldProps) {
  const ctx = useFormContext();
  if (!ctx) {
    throw new Error(
      'Field must be rendered inside a FormProvider or passed a control prop'
    );
  }

  const control = ctx.control;
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

  const rules = useMemo(() => {
    const r = getValidationRules(field);
    return {
      required: r.required,
      min: r.min,
      max: r.max,
      minLength: r.minLength,
      maxLength: r.maxLength,
      pattern: coercePattern(r.pattern),
    };
  }, [field]);

  return (
    <Controller
      name={field.name}
      control={control}
      rules={rules}
      defaultValue={getDefaultValue(field)}
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
