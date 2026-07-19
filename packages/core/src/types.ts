export interface FieldTypeMap { }

export type FieldType = keyof FieldTypeMap extends never
  ? string
  : keyof FieldTypeMap | (string & {});

export interface Choice {
  label: string;
  value: string;
}

export type DependencyType = 'hidden' | 'show' | 'required' | 'disabled' | 'readonly';

export interface Dependency {
  name: string;
  value: any;
  type: DependencyType;
}

export type ValidationValue = boolean | number | string | RegExp;
export type ValidationRule<TValidationValue extends ValidationValue = ValidationValue> = TValidationValue | ValidationValueMessage<TValidationValue>;
export type ValidationValueMessage<TValidationValue extends ValidationValue = ValidationValue> = {
  value: TValidationValue;
  message: string;
};

export interface ValidationRules {
  required?: string | ValidationRule<boolean>;
  min?: ValidationRule<number | string>;
  max?: ValidationRule<number | string>;
  maxLength?: ValidationRule<number>;
  minLength?: ValidationRule<number>;
  pattern?: string | RegExp | ValidationRule<RegExp | string>;
  disabled?: boolean;
  readonly?: boolean;
}

export type ValidationMode = 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched' | 'all';
export type ReValidationMode = 'onChange' | 'onBlur' | 'onSubmit';

export interface FieldConfig {
  name: string;
  type: FieldType;
  label?: string;
  description?: string;
  placeholder?: string;
  defaultValue?: any;
  dependencies?: Dependency[];
  rules?: ValidationRules;
  options?: Choice[];
  props?: Record<string, any>;
}

export interface FormConfig {
  validationMode?: ValidationMode;
  reValidateMode?: ReValidationMode;
  fields: FieldConfig[];
}

export interface FieldState {
  visible: boolean;
  required: boolean;
  disabled: boolean;
  readonly: boolean;
  defaultValue: any;
}

export type FieldRegistry<T> = Record<string, T>;
