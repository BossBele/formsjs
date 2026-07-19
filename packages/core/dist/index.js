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
    "jsforms: config must be a FieldConfig[] or { fields: FieldConfig[] }"
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
export {
  coercePattern,
  createDefaultValues,
  createFieldRegistry,
  getDefaultValue,
  getFieldState,
  getValidationRules,
  normalizeConfig
};
//# sourceMappingURL=index.js.map