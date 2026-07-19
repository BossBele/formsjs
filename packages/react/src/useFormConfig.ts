import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { normalizeConfig, type FieldConfig, type FormConfig } from '@form-os/core';

export function useFormConfig(config: FieldConfig[] | FormConfig) {
  const normalized = useMemo(() => normalizeConfig(config), [config]);

  const defaultValues = useMemo(
    () =>
      Object.fromEntries(
        normalized.fields
          .filter((f) => f.defaultValue !== undefined)
          .map((f) => [f.name, f.defaultValue])
      ),
    [normalized.fields]
  );

  const form = useForm({
    defaultValues,
    mode: normalized.validationMode,
    reValidateMode: normalized.reValidateMode,
  });

  return { ...form, fields: normalized.fields };
}
