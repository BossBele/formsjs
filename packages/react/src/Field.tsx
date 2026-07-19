import type { ComponentType } from 'react';
import type { Control, RegisterOptions } from 'react-hook-form';
import type { FieldConfig } from '@form-os/core';
import { useField } from './useField';

export interface FieldProps {
  field: FieldConfig;
  control: Control;
  component: ComponentType<any>;
  rules?: RegisterOptions;
  [key: string]: any;
}

export function Field({ field, control, component: Component, rules, ...rest }: FieldProps) {
  const { field: f, fieldState, state } = useField(field, control, { rules });

  if (!state.visible) {
    return null;
  }

  return (
    <Component
      formField={f}
      fieldConfig={field}
      fieldState={state}
      error={fieldState.error}
      disabled={state.disabled}
      readonly={state.readonly}
      {...rest}
    />
  );
}
