import * as react_hook_form from 'react-hook-form';
import { RegisterOptions, Control } from 'react-hook-form';
export { Control, FormProvider, RegisterOptions, UseFormProps, useForm, useFormContext } from 'react-hook-form';
import * as _form_os_core from '@form-os/core';
import { FieldConfig, FormConfig } from '@form-os/core';
export { a as Field, F as FieldProps } from './Field-Bq9-eB99.js';
import * as react from 'react';
import { ComponentType, ReactNode } from 'react';

declare function useFormConfig(config: FieldConfig[] | FormConfig): {
    fields: FieldConfig[];
    watch: react_hook_form.UseFormWatch<{
        [k: string]: any;
    }>;
    getValues: react_hook_form.UseFormGetValues<{
        [k: string]: any;
    }>;
    getFieldState: react_hook_form.UseFormGetFieldState<{
        [k: string]: any;
    }>;
    setError: react_hook_form.UseFormSetError<{
        [k: string]: any;
    }>;
    clearErrors: react_hook_form.UseFormClearErrors<{
        [k: string]: any;
    }>;
    setValue: react_hook_form.UseFormSetValue<{
        [k: string]: any;
    }>;
    setValues: react_hook_form.UseFormSetValues<{
        [k: string]: any;
    }>;
    trigger: react_hook_form.UseFormTrigger<{
        [k: string]: any;
    }>;
    formState: react_hook_form.FormState<{
        [k: string]: any;
    }>;
    resetField: react_hook_form.UseFormResetField<{
        [k: string]: any;
    }>;
    reset: react_hook_form.UseFormReset<{
        [k: string]: any;
    }>;
    resetDefaultValues: react_hook_form.UseFormResetDefaultValues<{
        [k: string]: any;
    }>;
    handleSubmit: react_hook_form.UseFormHandleSubmit<{
        [k: string]: any;
    }, {
        [k: string]: any;
    }>;
    unregister: react_hook_form.UseFormUnregister<{
        [k: string]: any;
    }>;
    control: react_hook_form.Control<{
        [k: string]: any;
    }, any, {
        [k: string]: any;
    }>;
    register: react_hook_form.UseFormRegister<{
        [k: string]: any;
    }>;
    setFocus: react_hook_form.UseFormSetFocus<{
        [k: string]: any;
    }>;
    subscribe: react_hook_form.UseFormSubscribe<{
        [k: string]: any;
    }>;
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
