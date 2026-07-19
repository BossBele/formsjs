import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import type { UseFormProps } from 'react-hook-form';
import type { ComponentType } from 'react';
import {
  normalizeConfig,
  type FieldConfig,
  type FormConfig,
} from '@form-os/core';

export interface UseFormConfigOptions extends Omit<UseFormProps, 'defaultValues'> {
  defaultValues?: Record<string, any>;
  components?: Record<string, ComponentType<any>>;
}

export function useFormConfig(
  config: FieldConfig[] | FormConfig,
  options: UseFormConfigOptions = {}
) {
  const { components, ...formOptions } = options;
  const normalized = useMemo(() => normalizeConfig(config), [config]);

  const form = useForm(formOptions);

  return { ...form, fields: normalized.fields, components };
}
