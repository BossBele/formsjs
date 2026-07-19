"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunk3PMQZRSQcjs = require('./chunk-3PMQZRSQ.cjs');

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










exports.Field = _chunk3PMQZRSQcjs.Field; exports.FormFieldsProvider = _chunk3PMQZRSQcjs.FormFieldsProvider; exports.FormProvider = _reacthookform.FormProvider; exports.useField = _chunk3PMQZRSQcjs.useField; exports.useFieldComponents = _chunk3PMQZRSQcjs.useFieldComponents; exports.useForm = _reacthookform.useForm; exports.useFormConfig = useFormConfig; exports.useFormContext = _reacthookform.useFormContext;
//# sourceMappingURL=index.cjs.map