import { Field, type FieldProps } from '../Field';
import { defaultComponents } from './defaultComponents';

export function DefaultField({
  field,
  ...rest
}: Omit<FieldProps, 'components'>) {
  return <Field field={field} components={defaultComponents} {...rest} />;
}
