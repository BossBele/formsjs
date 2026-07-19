import { Field, type FieldProps } from '../Field';
import { defaultComponents } from './defaultComponents';

export function DefaultField({
  field,
  control,
  ...rest
}: Omit<FieldProps, 'components'>) {
  return <Field field={field} control={control} components={defaultComponents} {...rest} />;
}
