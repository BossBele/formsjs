import { FieldConfig, FieldState } from '@form-os/core';
import { ControllerRenderProps, FieldError } from 'react-hook-form';
import * as react from 'react';
import { F as FieldProps } from '../Field-Bq9-eB99.js';

interface FieldComponentProps {
    formField: ControllerRenderProps;
    fieldConfig: FieldConfig;
    fieldState: FieldState;
    error?: FieldError;
    disabled?: boolean;
    readonly?: boolean;
    className?: string;
    [key: string]: any;
}

declare function TextField({ formField, fieldConfig, className, ...rest }: FieldComponentProps): react.JSX.Element;

declare function NumberField({ formField, fieldConfig, className, ...rest }: FieldComponentProps): react.JSX.Element;

declare function EmailField({ formField, fieldConfig, className, ...rest }: FieldComponentProps): react.JSX.Element;

declare function PasswordField({ formField, fieldConfig, className, ...rest }: FieldComponentProps): react.JSX.Element;

declare function TextAreaField({ formField, fieldConfig, className, ...rest }: FieldComponentProps): react.JSX.Element;

declare function DateField({ formField, fieldConfig, className, ...rest }: FieldComponentProps): react.JSX.Element;

declare function SelectField({ formField, fieldConfig, className, ...rest }: FieldComponentProps): react.JSX.Element;

declare function CheckboxField({ formField, fieldConfig, className, ...rest }: FieldComponentProps): react.JSX.Element;

declare function RadioField({ formField, fieldConfig, className, ...rest }: FieldComponentProps): react.JSX.Element;

declare function SwitchField({ formField, fieldConfig, className, ...rest }: FieldComponentProps): react.JSX.Element;

declare const defaultComponents: {
    text: typeof TextField;
    number: typeof NumberField;
    email: typeof EmailField;
    password: typeof PasswordField;
    textarea: typeof TextAreaField;
    date: typeof DateField;
    select: typeof SelectField;
    checkbox: typeof CheckboxField;
    radio: typeof RadioField;
    switch: typeof SwitchField;
};

declare function DefaultField({ field, control, ...rest }: Omit<FieldProps, 'components'>): react.JSX.Element;

export { CheckboxField, DateField, DefaultField, EmailField, type FieldComponentProps, NumberField, PasswordField, RadioField, SelectField, SwitchField, TextAreaField, TextField, defaultComponents };
