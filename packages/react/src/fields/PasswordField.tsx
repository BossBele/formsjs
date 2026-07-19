import type { FieldComponentProps } from './types';

export function PasswordField({
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
      type="password"
      placeholder={fieldConfig.placeholder}
      className={className}
      {...rest}
    />
  );
}
