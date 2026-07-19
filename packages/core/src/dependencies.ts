import type { FieldConfig, DependencyType, FieldState } from './types';
import { getDefaultValue } from './normalize';

function allOfTypeMatch(
  dependencies: FieldConfig['dependencies'],
  type: DependencyType,
  values: Record<string, any>
): boolean {
  const subset = dependencies?.filter((d) => d.type === type) ?? [];
  if (subset.length === 0) return false;
  return subset.every((d) => values[d.name] === d.value);
}

function hasType(
  dependencies: FieldConfig['dependencies'],
  type: DependencyType
): boolean {
  return (dependencies ?? []).some((d) => d.type === type);
}

export function getFieldState(
  field: FieldConfig,
  values: Record<string, any>
): FieldState {
  const dependencies = field.dependencies ?? [];

  let visible = true;
  if (hasType(dependencies, 'show')) {
    visible = allOfTypeMatch(dependencies, 'show', values);
  }
  if (hasType(dependencies, 'hidden')) {
    if (allOfTypeMatch(dependencies, 'hidden', values)) {
      visible = false;
    }
  }

  let required = !!field.rules?.required;
  if (hasType(dependencies, 'required')) {
    required = allOfTypeMatch(dependencies, 'required', values);
  }

  let disabled = false;
  if (hasType(dependencies, 'disabled')) {
    disabled = allOfTypeMatch(dependencies, 'disabled', values);
  }

  return { visible, required, disabled, defaultValue: getDefaultValue(field) };
}
