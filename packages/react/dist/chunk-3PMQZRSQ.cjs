"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }// src/useField.ts
var _react = require('react');
var _reacthookform = require('react-hook-form');
var _core = require('@form-os/core');
function useField(field, control, options = {}) {
  const values = _reacthookform.useWatch.call(void 0, { control });
  const state = _react.useMemo.call(void 0, 
    () => _core.getFieldState.call(void 0, field, _nullishCoalesce(values, () => ( {}))),
    [field, values]
  );
  const { field: f, fieldState } = _reacthookform.useController.call(void 0, {
    name: field.name,
    control,
    rules: _nullishCoalesce(options.rules, () => ( field.rules)),
    defaultValue: _nullishCoalesce(options.defaultValue, () => ( field.defaultValue)),
    disabled: state.disabled
  });
  return { field: f, fieldState, state };
}

// src/FormFieldsContext.tsx

var _jsxruntime = require('react/jsx-runtime');
var FormFieldsContext = _react.createContext.call(void 0, {});
function FormFieldsProvider({ components, children }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormFieldsContext.Provider, { value: components, children });
}
function useFieldComponents() {
  return _react.useContext.call(void 0, FormFieldsContext);
}

// src/Field.tsx

function Field({
  field,
  control,
  component,
  rules,
  ...rest
}) {
  const contextComponents = useFieldComponents();
  const Component = _nullishCoalesce(_nullishCoalesce(component, () => ( contextComponents[field.type])), () => ( contextComponents["text"]));
  const { field: f, fieldState, state } = useField(field, control, { rules });
  if (!state.visible) {
    return null;
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
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






exports.useField = useField; exports.FormFieldsProvider = FormFieldsProvider; exports.useFieldComponents = useFieldComponents; exports.Field = Field;
//# sourceMappingURL=chunk-3PMQZRSQ.cjs.map