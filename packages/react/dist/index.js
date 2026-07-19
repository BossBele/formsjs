import {
  Field
} from "./chunk-NL5ZMYHU.js";

// src/useFormConfig.ts
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import {
  normalizeConfig,
  createDefaultValues,
  getFieldState
} from "@jsforms/core";
function useFormConfig(config, options = {}) {
  const { components, resolver, ...formOptions } = options;
  const normalized = useMemo(() => normalizeConfig(config), [config]);
  const defaultValues = useMemo(
    () => createDefaultValues(normalized.fields),
    [normalized.fields]
  );
  const form = useForm({
    defaultValues,
    resolver,
    ...formOptions
  });
  const values = form.watch();
  const fieldStates = useMemo(() => {
    const watched = values;
    return normalized.fields.map((field) => ({
      field,
      state: getFieldState(field, watched)
    }));
  }, [normalized.fields, values]);
  return { ...form, fields: normalized.fields, fieldStates, components };
}

// src/index.ts
import { FormProvider, useFormContext } from "react-hook-form";
export {
  Field,
  FormProvider,
  useFormConfig,
  useFormContext
};
//# sourceMappingURL=index.js.map