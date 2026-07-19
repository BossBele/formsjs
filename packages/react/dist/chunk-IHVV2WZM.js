// src/useField.ts
import { useMemo } from "react";
import { useController, useWatch } from "react-hook-form";
import { getFieldState } from "@form-os/core";
function useField(field, control, options = {}) {
  const values = useWatch({ control });
  const state = useMemo(
    () => getFieldState(field, values ?? {}),
    [field, values]
  );
  const { field: f, fieldState } = useController({
    name: field.name,
    control,
    rules: options.rules ?? field.rules,
    defaultValue: options.defaultValue ?? field.defaultValue,
    disabled: state.disabled
  });
  return { field: f, fieldState, state };
}

// src/FormFieldsContext.tsx
import { createContext, useContext } from "react";
import { jsx } from "react/jsx-runtime";
var FormFieldsContext = createContext({});
function FormFieldsProvider({ components, children }) {
  return /* @__PURE__ */ jsx(FormFieldsContext.Provider, { value: components, children });
}
function useFieldComponents() {
  return useContext(FormFieldsContext);
}

// src/Field.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Field({
  field,
  control,
  component,
  rules,
  ...rest
}) {
  const contextComponents = useFieldComponents();
  const Component = component ?? contextComponents[field.type] ?? contextComponents["text"];
  const { field: f, fieldState, state } = useField(field, control, { rules });
  if (!state.visible) {
    return null;
  }
  return /* @__PURE__ */ jsx2(
    Component,
    {
      formField: f,
      fieldConfig: field,
      fieldState: state,
      error: fieldState.error,
      disabled: state.disabled,
      readonly: state.readonly,
      ...rest
    }
  );
}

export {
  useField,
  FormFieldsProvider,
  useFieldComponents,
  Field
};
//# sourceMappingURL=chunk-IHVV2WZM.js.map