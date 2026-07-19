import * as react from 'react';
import { ComponentType } from 'react';
import { FieldValues, Control } from 'react-hook-form';
import { FieldConfig } from '@form-os/core';

interface FieldProps<TFieldValues extends FieldValues = FieldValues> {
    field: FieldConfig;
    control: Control<TFieldValues>;
    component?: ComponentType<any>;
    [key: string]: any;
}
declare function Field<TFieldValues extends FieldValues = FieldValues>({ field, control, component, ...rest }: FieldProps<TFieldValues>): react.JSX.Element | null;

export { type FieldProps as F, Field as a };
