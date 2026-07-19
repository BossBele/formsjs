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

export interface ValidationRules {
  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string | RegExp;
  disabled?: boolean;
  readonly?: boolean;
}

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
  id?: string;
  title?: string;
  submitLabel?: string;
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
