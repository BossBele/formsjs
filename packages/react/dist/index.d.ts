import * as react_hook_form from 'react-hook-form';
export { FormProvider, useFormContext } from 'react-hook-form';
import * as _formsjs_core from '@formsjs/core';
import { FieldConfig, FormConfig } from '@formsjs/core';
import { ComponentType } from 'react';
export { a as Field, F as FieldProps } from './Field-BNYW3z7J.js';

interface UseFormConfigOptions {
    components?: Record<string, ComponentType<any>>;
    resolver?: any;
    [key: string]: any;
}
declare function useFormConfig(config: FieldConfig[] | FormConfig, options?: UseFormConfigOptions): {
    fields: FieldConfig[];
    fieldStates: {
        field: FieldConfig;
        state: _formsjs_core.FieldState;
    }[];
    components: Record<string, ComponentType<any>> | undefined;
    watch: react_hook_form.UseFormWatch<Record<string, any>>;
    getValues: react_hook_form.UseFormGetValues<Record<string, any>>;
    getFieldState: react_hook_form.UseFormGetFieldState<Record<string, any>>;
    setError: react_hook_form.UseFormSetError<Record<string, any>>;
    clearErrors: react_hook_form.UseFormClearErrors<Record<string, any>>;
    setValue: react_hook_form.UseFormSetValue<Record<string, any>>;
    setValues: react_hook_form.UseFormSetValues<Record<string, any>>;
    trigger: react_hook_form.UseFormTrigger<Record<string, any>>;
    formState: react_hook_form.FormState<Record<string, any>>;
    resetField: react_hook_form.UseFormResetField<Record<string, any>>;
    reset: react_hook_form.UseFormReset<Record<string, any>>;
    resetDefaultValues: react_hook_form.UseFormResetDefaultValues<Record<string, any>>;
    handleSubmit: react_hook_form.UseFormHandleSubmit<Record<string, any>, Record<string, any>>;
    unregister: react_hook_form.UseFormUnregister<Record<string, any>>;
    control: react_hook_form.Control<Record<string, any>, any, Record<string, any>>;
    register: react_hook_form.UseFormRegister<Record<string, any>>;
    setFocus: react_hook_form.UseFormSetFocus<Record<string, any>>;
    subscribe: react_hook_form.UseFormSubscribe<Record<string, any>>;
};

export { type UseFormConfigOptions, useFormConfig };
