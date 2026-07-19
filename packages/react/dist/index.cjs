"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkCYMOPAGJcjs = require('./chunk-CYMOPAGJ.cjs');

// src/useFormConfig.ts
var _react = require('react');
var _reacthookform = require('react-hook-form');
var _core = require('@form-os/core');
function useFormConfig(config) {
  const normalized = _react.useMemo.call(void 0, () => _core.normalizeConfig.call(void 0, config), [config]);
  const defaultValues = _react.useMemo.call(void 0, 
    () => Object.fromEntries(
      normalized.fields.filter((f) => f.defaultValue !== void 0).map((f) => [f.name, f.defaultValue])
    ),
    [normalized.fields]
  );
  const form = _reacthookform.useForm.call(void 0, {
    defaultValues,
    mode: normalized.validationMode,
    reValidateMode: normalized.reValidateMode
  });
  return { ...form, fields: normalized.fields };
}

// src/index.ts










exports.Field = _chunkCYMOPAGJcjs.Field; exports.FormFieldsProvider = _chunkCYMOPAGJcjs.FormFieldsProvider; exports.FormProvider = _reacthookform.FormProvider; exports.useField = _chunkCYMOPAGJcjs.useField; exports.useFieldComponents = _chunkCYMOPAGJcjs.useFieldComponents; exports.useForm = _reacthookform.useForm; exports.useFormConfig = useFormConfig; exports.useFormContext = _reacthookform.useFormContext;
//# sourceMappingURL=index.cjs.map