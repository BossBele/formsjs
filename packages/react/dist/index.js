import {
  Field,
  FormFieldsProvider,
  useField,
  useFieldComponents
} from "./chunk-N346U2SM.js";

// src/useFormConfig.ts
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { normalizeConfig } from "@form-os/core";
function useFormConfig(config) {
  const normalized = useMemo(() => normalizeConfig(config), [config]);
  const defaultValues = useMemo(
    () => Object.fromEntries(
      normalized.fields.filter((f) => f.defaultValue !== void 0).map((f) => [f.name, f.defaultValue])
    ),
    [normalized.fields]
  );
  const form = useForm({ defaultValues });
  return { ...form, fields: normalized.fields };
}

// src/index.ts
import { FormProvider, useFormContext, useForm as useForm2 } from "react-hook-form";
export {
  Field,
  FormFieldsProvider,
  FormProvider,
  useField,
  useFieldComponents,
  useForm2 as useForm,
  useFormConfig,
  useFormContext
};
//# sourceMappingURL=index.js.map