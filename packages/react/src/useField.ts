import { useMemo } from 'react';
import { useController, useWatch } from 'react-hook-form';
import type { Control, RegisterOptions } from 'react-hook-form';
import { getFieldState, type FieldConfig } from '@form-os/core';

export interface UseFieldOptions {
  rules?: RegisterOptions;
  defaultValue?: any;
}

export function useField(
  field: FieldConfig,
  control: Control,
  options: UseFieldOptions = {}
) {
  const values = useWatch({ control }) as Record<string, any>;

  const state = useMemo(
    () => getFieldState(field, values ?? {}),
    [field, values]
  );

  const { field: f, fieldState } = useController({
    name: field.name,
    control,
    rules: options.rules ?? (field.rules as RegisterOptions | undefined),
    defaultValue: options.defaultValue ?? field.defaultValue,
    disabled: state.disabled,
  });

  return { field: f, fieldState, state };
}
