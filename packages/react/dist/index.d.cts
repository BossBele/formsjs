import * as react_hook_form from 'react-hook-form';
import { FieldValues, UseFormReturn, RegisterOptions, Control } from 'react-hook-form';
export { Control, FormProvider, RegisterOptions, UseFormProps, useForm, useFormContext } from 'react-hook-form';
import * as _form_os_core from '@form-os/core';
import { FieldConfig, FormConfig } from '@form-os/core';
export { a as Field, F as FieldProps } from './Field-Bq9-eB99.cjs';
import * as react from 'react';
import { ComponentType, ReactNode } from 'react';

declare function useFormConfig<TFieldValues extends FieldValues = FieldValues>(config: FieldConfig[] | FormConfig): UseFormReturn<TFieldValues> & {
    fields: FieldConfig[];
};

interface UseFieldOptions {
    rules?: RegisterOptions;
    defaultValue?: any;
}
declare function useField(field: FieldConfig, control: Control, options?: UseFieldOptions): {
    field: react_hook_form.ControllerRenderProps<react_hook_form.FieldValues, string>;
    fieldState: react_hook_form.ControllerFieldState;
    state: _form_os_core.FieldState;
};

type ComponentsMap = Record<string, ComponentType<any>>;
interface FormFieldsProviderProps {
    components: ComponentsMap;
    children: ReactNode;
}
declare function FormFieldsProvider({ components, children }: FormFieldsProviderProps): react.JSX.Element;
declare function useFieldComponents(): ComponentsMap;

export { type ComponentsMap, FormFieldsProvider, type FormFieldsProviderProps, type UseFieldOptions, useField, useFieldComponents, useFormConfig };
