import type { FieldComponentProps } from './types';

export function TextAreaField({
  formField,
  fieldConfig,
  className,
  ...rest
}: FieldComponentProps) {
  const { ref, ...field } = formField;
  return (
    <textarea
      ref={ref}
      {...field}
      rows={fieldConfig.props?.rows ?? 3}
      placeholder={fieldConfig.placeholder}
      className={className}
      {...rest}
    />
  );
}
