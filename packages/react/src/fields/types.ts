import type { FieldConfig, FieldState } from '@jsforms/core';
import type { ControllerRenderProps, FieldError } from 'react-hook-form';

export interface FieldComponentProps {
  formField: ControllerRenderProps;
  fieldConfig: FieldConfig;
  fieldState: FieldState;
  error?: FieldError;
  disabled?: boolean;
  className?: string;
  [key: string]: any;
}
