import type { FieldComponentProps } from './types';

export function DateField({
  formField,
  fieldConfig,
  className,
  ...rest
}: FieldComponentProps) {
  const { ref, ...field } = formField;
  return (
    <input
      ref={ref}
      {...field}
      type="date"
      placeholder={fieldConfig.placeholder}
      className={className}
      {...rest}
    />
  );
}
