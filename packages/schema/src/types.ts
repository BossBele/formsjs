export interface Choice {
  label: string;
  value: string;
}

export type DependencyType = 'hidden' | 'show' | 'required' | 'disabled';

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
}

export interface FieldConfig {
  name: string;
  type: string;
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
