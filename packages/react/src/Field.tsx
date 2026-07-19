import { useMemo } from 'react';
import { useController } from 'react-hook-form';
import type { Control, RegisterOptions } from 'react-hook-form';
import type { ComponentType } from 'react';
import { getFieldState, type FieldConfig } from '@form-os/core';

export interface FieldProps {
  field: FieldConfig;
  control: Control;
  components: Record<string, ComponentType<any>>;
  values?: Record<string, any>;
  rules?: RegisterOptions;
  [key: string]: any;
}

export function Field({ field, control, components, values = {}, rules, ...rest }: FieldProps) {
  const Component = components[field.type] ?? components['text'];
  if (!Component) {
    throw new Error(`No component registered for field type "${field.type}"`);
  }

  const state = useMemo(
    () => getFieldState(field, values),
    [field, values]
  );

  const { field: f, fieldState } = useController({
    name: field.name,
    control,
    rules: rules ?? (field.rules as RegisterOptions | undefined),
    defaultValue: field.defaultValue,
    disabled: field.rules?.disabled,
  });

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
      {...rest}
    />
  );
}
