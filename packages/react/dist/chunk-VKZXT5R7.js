// src/Field.tsx
import { useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  getFieldState,
  getValidationRules,
  coercePattern,
  getDefaultValue
} from "@form-os/core";
import { jsx } from "react/jsx-runtime";
function Field({ field, components, ...rest }) {
  const ctx = useFormContext();
  if (!ctx) {
    throw new Error(
      "Field must be rendered inside a FormProvider or passed a control prop"
    );
  }
  const control = ctx.control;
  const Component = components[field.type] ?? components["text"];
  if (!Component) {
    throw new Error(`No component registered for field type "${field.type}"`);
  }
  const values = ctx.watch();
  const state = useMemo(
    () => getFieldState(field, values),
    [field, values]
  );
  if (!state.visible) {
    return null;
  }
  const rules = useMemo(() => {
    const r = getValidationRules(field);
    return {
      required: r.required,
      min: r.min,
      max: r.max,
      minLength: r.minLength,
      maxLength: r.maxLength,
      pattern: coercePattern(r.pattern)
    };
  }, [field]);
  return /* @__PURE__ */ jsx(
    Controller,
    {
      name: field.name,
      control,
      rules,
      defaultValue: getDefaultValue(field),
      render: ({ field: f, fieldState }) => /* @__PURE__ */ jsx(
        Component,
        {
          formField: f,
          fieldConfig: field,
          fieldState: state,
          error: fieldState.error,
          disabled: state.disabled,
          ...rest
        }
      )
    }
  );
}

export {
  Field
};
//# sourceMappingURL=chunk-VKZXT5R7.js.map