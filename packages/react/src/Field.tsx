import type { ComponentType } from 'react';
import type { Control, FieldValues, RegisterOptions } from 'react-hook-form';
import type { FieldConfig } from '@form-os/core';
import { useField } from './useField';
import { useFieldComponents } from './FormFieldsContext';

export interface FieldProps<TFieldValues extends FieldValues = FieldValues> {
  field: FieldConfig;
  control: Control<TFieldValues>;
  component?: ComponentType<any>;
  rules?: RegisterOptions;
  [key: string]: any;
}

export function Field<TFieldValues extends FieldValues = FieldValues>({
  field,
  control,
  component,
  rules,
  ...rest
}: FieldProps<TFieldValues>) {
  const contextComponents = useFieldComponents();
  const Component = component ?? contextComponents[field.type] ?? contextComponents['text'];
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
