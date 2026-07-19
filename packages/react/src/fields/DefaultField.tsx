import type { ComponentType } from 'react';
import type { FieldValues } from 'react-hook-form';
import { Field, type FieldProps } from '../Field';
import { defaultComponents } from './defaultComponents';

export function DefaultField<TFieldValues extends FieldValues = FieldValues>({
  field,
  control,
  component,
  ...rest
}: FieldProps<TFieldValues>) {
  const components = defaultComponents as Record<string, ComponentType<any>>;
  const resolved = component ?? components[field.type] ?? components['text'];
  return <Field field={field} control={control} component={resolved} {...rest} />;
}
