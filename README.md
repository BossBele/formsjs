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
import { FormProvider } from '@form-os/react';
import { DefaultField, useFormConfig } from '@form-os/react/fields';

function MyForm() {
  const { handleSubmit, fields, ...form } = useFormConfig(config);

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <DefaultField key={field.name} field={field} />
        ))}
        <button type="submit">Send</button>
      </form>
    </FormProvider>
  );
}
```

## Custom field components

```tsx
import { Field, useFormConfig } from '@form-os/react';
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

<Field field={config.fields[0]} components={components} />
```

## Use the core without React

```ts
import { normalizeConfig, createDefaultValues, getFieldState } from '@form-os/core';

const { fields } = normalizeConfig(config);
const defaults = createDefaultValues(fields);
const state = getFieldState(fields[0], defaults);
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
