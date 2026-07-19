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

```tsx
import { useFormConfig, Field } from '@form-os/react';
import { defaultComponents } from '@form-os/react/fields';

function MyForm() {
  const { handleSubmit, fields, control, values } = useFormConfig(config);

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <Field
          key={field.name}
          field={field}
          control={control}
          values={values}
          components={defaultComponents}
        />
      ))}
      <button type="submit">Send</button>
    </form>
  );
}
```

## Custom field components

```tsx
import { useFormConfig, Field } from '@form-os/react';
import { TextField, defaultComponents } from '@form-os/react/fields';

const components = {
  ...defaultComponents,
  text: (props) => (
    <div>
      <label>{props.fieldConfig.label}</label>
      <TextField {...props} />
      {props.error && <span>{props.error.message}</span>}
    </div>
  ),
};

function MyForm() {
  const { handleSubmit, control, values, fields } = useFormConfig(config);
  return (
    <form onSubmit={handleSubmit(console.log)}>
      {fields.map((field) => (
        <Field key={field.name} field={field} control={control} values={values} components={components} />
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
