"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkD5FU5YAEcjs = require('./chunk-D5FU5YAE.cjs');

// src/useFormConfig.ts
var _react = require('react');
var _reacthookform = require('react-hook-form');




var _core = require('@formsjs/core');
function useFormConfig(config, options = {}) {
  const { components, resolver, ...formOptions } = options;
  const normalized = _react.useMemo.call(void 0, () => _core.normalizeConfig.call(void 0, config), [config]);
  const defaultValues = _react.useMemo.call(void 0, 
    () => _core.createDefaultValues.call(void 0, normalized.fields),
    [normalized.fields]
  );
  const form = _reacthookform.useForm.call(void 0, {
    defaultValues,
    resolver,
    ...formOptions
  });
  const values = form.watch();
  const fieldStates = _react.useMemo.call(void 0, () => {
    const watched = values;
    return normalized.fields.map((field) => ({
      field,
      state: _core.getFieldState.call(void 0, field, watched)
    }));
  }, [normalized.fields, values]);
  return { ...form, fields: normalized.fields, fieldStates, components };
}

// src/index.ts






exports.Field = _chunkD5FU5YAEcjs.Field; exports.FormProvider = _reacthookform.FormProvider; exports.useFormConfig = useFormConfig; exports.useFormContext = _reacthookform.useFormContext;
//# sourceMappingURL=index.cjs.map