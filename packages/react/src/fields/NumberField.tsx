import type { FieldComponentProps } from './types';

export function NumberField({
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
      type="number"
      min={fieldConfig.rules?.min}
      max={fieldConfig.rules?.max}
      placeholder={fieldConfig.placeholder}
      className={className}
      {...rest}
    />
  );
}
