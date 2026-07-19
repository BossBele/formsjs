import type { FieldComponentProps } from './types';

export function TextField({
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
      type="text"
      placeholder={fieldConfig.placeholder}
      className={className}
      {...rest}
    />
  );
}
