import * as react from 'react';
import { ComponentType } from 'react';
import { FieldConfig } from '@form-os/core';

interface FieldProps {
    field: FieldConfig;
    components: Record<string, ComponentType<any>>;
    [key: string]: any;
}
declare function Field({ field, components, ...rest }: FieldProps): react.JSX.Element | null;

export { type FieldProps as F, Field as a };
