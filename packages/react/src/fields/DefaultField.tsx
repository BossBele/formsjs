import type { ComponentType } from 'react';
import { Field, type FieldProps } from '../Field';
import { defaultComponents } from './defaultComponents';

export function DefaultField({
  field,
  control,
  component,
  ...rest
}: FieldProps) {
  const components = defaultComponents as Record<string, ComponentType<any>>;
  const resolved = component ?? components[field.type] ?? components['text'];
  return <Field field={field} control={control} component={resolved} {...rest} />;
}
