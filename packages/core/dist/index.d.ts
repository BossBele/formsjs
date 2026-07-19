interface Choice {
    label: string;
    value: string;
}
type DependencyType = 'hidden' | 'show' | 'required' | 'disabled';
interface Dependency {
    name: string;
    value: any;
    type: DependencyType;
}
interface ValidationRules {
    required?: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string | RegExp;
}
interface FieldConfig {
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
interface FormConfig {
    id?: string;
    title?: string;
    submitLabel?: string;
    fields: FieldConfig[];
}
interface FieldState {
    visible: boolean;
    required: boolean;
    disabled: boolean;
    defaultValue: any;
}
type FieldRegistry<T> = Record<string, T>;

declare function normalizeConfig(config: FieldConfig[] | Partial<FormConfig> | unknown): FormConfig;
declare function getDefaultValue(field: FieldConfig): any;
declare function createDefaultValues(fields: FieldConfig[]): Record<string, any>;

declare function getFieldState(field: FieldConfig, values: Record<string, any>): FieldState;

declare function createFieldRegistry<T>(defaults: FieldRegistry<T>, overrides?: FieldRegistry<T>): FieldRegistry<T>;

declare function getValidationRules(field: FieldConfig): ValidationRules;
declare function coercePattern(pattern?: string | RegExp): RegExp | undefined;

export { type Choice, type Dependency, type DependencyType, type FieldConfig, type FieldRegistry, type FieldState, type FormConfig, type ValidationRules, coercePattern, createDefaultValues, createFieldRegistry, getDefaultValue, getFieldState, getValidationRules, normalizeConfig };
