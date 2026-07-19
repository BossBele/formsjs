"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }// src/Field.tsx
var _react = require('react');
var _reacthookform = require('react-hook-form');





var _core = require('@formsjs/core');
var _jsxruntime = require('react/jsx-runtime');
function Field({ field, components, ...rest }) {
  const ctx = _reacthookform.useFormContext.call(void 0, );
  if (!ctx) {
    throw new Error(
      "Field must be rendered inside a FormProvider or passed a control prop"
    );
  }
  const control = ctx.control;
  const Component = _nullishCoalesce(components[field.type], () => ( components["text"]));
  if (!Component) {
    throw new Error(`No component registered for field type "${field.type}"`);
  }
  const values = ctx.watch();
  const state = _react.useMemo.call(void 0, 
    () => _core.getFieldState.call(void 0, field, values),
    [field, values]
  );
  if (!state.visible) {
    return null;
  }
  const rules = _react.useMemo.call(void 0, () => {
    const r = _core.getValidationRules.call(void 0, field);
    return {
      required: r.required,
      min: r.min,
      max: r.max,
      minLength: r.minLength,
      maxLength: r.maxLength,
      pattern: _core.coercePattern.call(void 0, r.pattern)
    };
  }, [field]);
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    _reacthookform.Controller,
    {
      name: field.name,
      control,
      rules,
      defaultValue: _core.getDefaultValue.call(void 0, field),
      render: ({ field: f, fieldState }) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
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



exports.Field = Field;
//# sourceMappingURL=chunk-D5FU5YAE.cjs.map