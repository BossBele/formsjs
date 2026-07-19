# formsjs

A small, cross-framework form config library.

- **`@formsjs/core`** — dependency-free config parser, dependency engine, and validation helpers.
- **`@formsjs/react`** — `react-hook-form` adapter with tree-shakeable field components.
- **`@formsjs/schema`** — JSON Schema and TypeScript types for form configs.
- **`@formsjs/svelte`** — placeholder for a future Svelte adapter.

## Install

```bash
pnpm add @formsjs/core @formsjs/react react-hook-form
# optional
pnpm add @formsjs/schema
```

React and `react-hook-form` are peer dependencies of `@formsjs/react`.

## Define a form config

```ts
import type { FormConfig } from '@formsjs/core';

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
        { name: 'reason', value: 'support', type: 'show' },
      ],
    },
  ],
};
```

## Use with React

```tsx
import { FormProvider } from '@formsjs/react';
import { DefaultField, useFormConfig } from '@formsjs/react/fields';

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
import { Field, useFormConfig } from '@formsjs/react';
import { TextField, defaultComponents } from '@formsjs/react/fields';

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
import { normalizeConfig, createDefaultValues, getFieldState } from '@formsjs/core';

const { fields } = normalizeConfig(config);
const defaults = createDefaultValues(fields);
const state = getFieldState(fields[0], defaults);
// state.visible, state.required, state.disabled, state.defaultValue
```

## Validate against the JSON schema

```ts
import { schema } from '@formsjs/schema';
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
