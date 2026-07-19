import * as react from 'react';
import { ComponentType } from 'react';
import { Control, RegisterOptions } from 'react-hook-form';
import { FieldConfig } from '@form-os/core';

interface FieldProps {
    field: FieldConfig;
    control: Control;
    component?: ComponentType<any>;
    rules?: RegisterOptions;
    [key: string]: any;
}
declare function Field({ field, control, component, rules, ...rest }: FieldProps): react.JSX.Element | null;

export { type FieldProps as F, Field as a };
