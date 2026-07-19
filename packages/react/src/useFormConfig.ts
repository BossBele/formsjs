import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import type { ComponentType } from 'react';
import {
  normalizeConfig,
  createDefaultValues,
  getFieldState,
  type FieldConfig,
  type FormConfig,
} from '@jsforms/core';

export interface UseFormConfigOptions {
  components?: Record<string, ComponentType<any>>;
  resolver?: any;
  [key: string]: any;
}

export function useFormConfig(
  config: FieldConfig[] | FormConfig,
  options: UseFormConfigOptions = {}
) {
  const { components, resolver, ...formOptions } = options;
  const normalized = useMemo(() => normalizeConfig(config), [config]);
  const defaultValues = useMemo(
    () => createDefaultValues(normalized.fields),
    [normalized.fields]
  );

  const form = useForm({
    defaultValues,
    resolver,
    ...formOptions,
  });

  const values = form.watch();
  const fieldStates = useMemo(() => {
    const watched = values as Record<string, any>;
    return normalized.fields.map((field) => ({
      field,
      state: getFieldState(field, watched),
    }));
  }, [normalized.fields, values]);

  return { ...form, fields: normalized.fields, fieldStates, components };
}
