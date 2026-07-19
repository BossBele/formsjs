interface FieldTypeMap {
}
type FieldType = keyof FieldTypeMap extends never ? string : keyof FieldTypeMap | (string & {});
interface Choice {
    label: string;
    value: string;
}
type DependencyType = 'hidden' | 'show' | 'required' | 'disabled' | 'readonly';
interface Dependency {
    name: string;
    value: any;
    type: DependencyType;
}
type ValidationValue = boolean | number | string | RegExp;
type ValidationRule<TValidationValue extends ValidationValue = ValidationValue> = TValidationValue | ValidationValueMessage<TValidationValue>;
type ValidationValueMessage<TValidationValue extends ValidationValue = ValidationValue> = {
    value: TValidationValue;
    message: string;
};
interface ValidationRules {
    required?: string | ValidationRule<boolean>;
    min?: ValidationRule<number | string>;
    max?: ValidationRule<number | string>;
    maxLength?: ValidationRule<number>;
    minLength?: ValidationRule<number>;
    pattern?: string | RegExp | ValidationRule<RegExp | string>;
    disabled?: boolean;
    readonly?: boolean;
}
type ValidationMode = 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched' | 'all';
type ReValidationMode = 'onChange' | 'onBlur' | 'onSubmit';
interface FieldConfig {
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
interface FormConfig {
    validationMode?: ValidationMode;
    reValidateMode?: ReValidationMode;
    fields: FieldConfig[];
}
interface FieldState {
    visible: boolean;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
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

export { type Choice, type Dependency, type DependencyType, type FieldConfig, type FieldRegistry, type FieldState, type FieldType, type FieldTypeMap, type FormConfig, type ReValidationMode, type ValidationMode, type ValidationRule, type ValidationRules, type ValidationValue, type ValidationValueMessage, coercePattern, createDefaultValues, createFieldRegistry, getDefaultValue, getFieldState, getValidationRules, normalizeConfig };
