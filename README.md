# form-os

A small, cross-framework form config library.

- **`@form-os/core`** — dependency-free config parser, dependency engine, and validation helpers.
- **`@form-os/react`** — `react-hook-form` adapter with tree-shakeable field components.
- **`@form-os/schema`** — JSON Schema and TypeScript types for form configs.
- **`@form-os/svelte`** — placeholder for a future Svelte adapter.

## Install

```bash
pnpm add @form-os/core @form-os/react react-hook-form
# optional
pnpm add @form-os/schema
```

React and `react-hook-form` are peer dependencies of `@form-os/react`.

## Define a form config

```ts
import type { FormConfig } from '@form-os/core';

const config: FormConfig = {
  title: 'Contact',
  submitLabel: 'Send',
  fields: [
    { name: 'name', type: 'text', label: 'Name', rules: { required: true } },
    { name: 'email', type: 'email', label: 'Email', rules: { required: true } },
    {
      name: 'reason',
      type: 'select',
      label: 'Reason',
      options: [
        { label: 'Feedback', value: 'feedback' },
        { label: 'Support', value: 'support' },
      ],
    },
    {
      name: 'details',
      type: 'textarea',
      label: 'Details',
      dependencies: [
        { type: 'hidden', name: 'reason', value: 'support' },
      ],
    },
  ],
};
```

## Use with React

Wrap your form with `FormFieldsProvider` to register components globally, then render each field without repeating the component prop:

```tsx
import { useFormConfig, Field, FormFieldsProvider } from '@form-os/react';
import { TextField } from '@form-os/react/fields';

const components = { text: TextField, email: TextField };

function MyForm() {
  const { handleSubmit, fields, control } = useFormConfig(config);

  return (
    <FormFieldsProvider components={components}>
      <form onSubmit={handleSubmit(console.log)}>
        {fields.map((field) => (
          <Field key={field.name} field={field} control={control} />
        ))}
        <button type="submit">Send</button>
      </form>
    </FormFieldsProvider>
  );
}
```

Pass `component` on a single `Field` to override the context component for that field.

## Add custom field types

Augment `FieldTypeMap` so TypeScript enforces your custom types:

```ts
// types/form-os.d.ts
import '@form-os/core';

declare module '@form-os/core' {
  interface FieldTypeMap {
    'date-picker': {};
    'rich-text': { toolbar?: string[] };
  }
}
```

Then register a component for each in `FormFieldsProvider`:

```tsx
import { DatePickerField } from './fields/DatePickerField';

const components = { text: TextField, 'date-picker': DatePickerField };
```

## Use the `useField` hook directly

```tsx
import { useField } from '@form-os/react';
import type { Control } from '@form-os/react';

function MyField({ field, control }: { field: FieldConfig; control: Control }) {
  const { field: f, fieldState, state } = useField(field, control);

  if (!state.visible) return null;

  return (
    <div>
      <label>{field.label}</label>
      <input
        {...f}
        readOnly={state.readonly}
        aria-invalid={!!fieldState.error}
      />
      {fieldState.error && <span>{fieldState.error.message}</span>}
    </div>
  );
}
```

## Custom field components

```tsx
import { useFormConfig, Field } from '@form-os/react';
import { TextField } from '@form-os/react/fields';

function MyTextField(props) {
  return (
    <div>
      <label>{props.fieldConfig.label}</label>
      <TextField {...props} />
      {props.error && <span>{props.error.message}</span>}
    </div>
  );
}

function MyForm() {
  const { handleSubmit, control, fields } = useFormConfig(config);
  return (
    <form onSubmit={handleSubmit(console.log)}>
      {fields.map((field) => (
        <Field key={field.name} field={field} control={control} component={MyTextField} />
      ))}
    </form>
  );
}
```

## Use the core without React

```ts
import { normalizeConfig, getFieldState } from '@form-os/core';

const { fields } = normalizeConfig(config);
const state = getFieldState(fields[0], { reason: 'support' });
// state.visible, state.required, state.disabled, state.defaultValue
```

## Validate against the JSON schema

```ts
import { schema } from '@form-os/schema';
import Ajv from 'ajv';

const ajv = new Ajv();
const validate = ajv.compile(schema);

if (!validate(config)) {
  console.error(validate.errors);
}
```

## Scripts

```bash
pnpm install
pnpm build      # build every package
pnpm test       # run the test suite
pnpm typecheck  # run tsc --noEmit in every package
```
