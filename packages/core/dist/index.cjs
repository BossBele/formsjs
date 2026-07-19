"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  coercePattern: () => coercePattern,
  createDefaultValues: () => createDefaultValues,
  createFieldRegistry: () => createFieldRegistry,
  getDefaultValue: () => getDefaultValue,
  getFieldState: () => getFieldState,
  getValidationRules: () => getValidationRules,
  normalizeConfig: () => normalizeConfig
});
module.exports = __toCommonJS(index_exports);

// src/normalize.ts
function normalizeConfig(config) {
  if (Array.isArray(config)) {
    return { fields: config };
  }
  if (config && typeof config === "object") {
    const c = config;
    if (Array.isArray(c.fields)) {
      return {
        id: c.id,
        title: c.title,
        submitLabel: c.submitLabel,
        fields: c.fields
      };
    }
  }
  throw new Error(
    "form-os: config must be a FieldConfig[] or { fields: FieldConfig[] }"
  );
}
function getDefaultValue(field) {
  if (field.defaultValue !== void 0) return field.defaultValue;
  switch (field.type) {
    case "switch":
    case "checkbox":
      return false;
    case "select":
      return field.props?.multiple ? [] : "";
    case "date":
      return "";
    default:
      return "";
  }
}
function createDefaultValues(fields) {
  const defaults = {};
  for (const field of fields) {
    defaults[field.name] = getDefaultValue(field);
  }
  return defaults;
}

// src/dependencies.ts
function allOfTypeMatch(dependencies, type, values) {
  const subset = dependencies?.filter((d) => d.type === type) ?? [];
  if (subset.length === 0) return false;
  return subset.every((d) => values[d.name] === d.value);
}
function hasType(dependencies, type) {
  return (dependencies ?? []).some((d) => d.type === type);
}
function getFieldState(field, values) {
  const dependencies = field.dependencies ?? [];
  let visible = true;
  if (hasType(dependencies, "show")) {
    visible = allOfTypeMatch(dependencies, "show", values);
  }
  if (hasType(dependencies, "hidden")) {
    if (allOfTypeMatch(dependencies, "hidden", values)) {
      visible = false;
    }
  }
  let required = !!field.rules?.required;
  if (hasType(dependencies, "required")) {
    required = allOfTypeMatch(dependencies, "required", values);
  }
  let disabled = false;
  if (hasType(dependencies, "disabled")) {
    disabled = allOfTypeMatch(dependencies, "disabled", values);
  }
  return { visible, required, disabled, defaultValue: getDefaultValue(field) };
}

// src/registry.ts
function createFieldRegistry(defaults, overrides) {
  return { ...defaults, ...overrides ?? {} };
}

// src/rules.ts
function getValidationRules(field) {
  return field.rules ?? {};
}
function coercePattern(pattern) {
  if (pattern === void 0 || pattern === null) return void 0;
  if (pattern instanceof RegExp) return pattern;
  if (typeof pattern === "string" && pattern.length > 0) {
    try {
      return new RegExp(pattern);
    } catch {
      return void 0;
    }
  }
  return void 0;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  coercePattern,
  createDefaultValues,
  createFieldRegistry,
  getDefaultValue,
  getFieldState,
  getValidationRules,
  normalizeConfig
});
//# sourceMappingURL=index.cjs.map