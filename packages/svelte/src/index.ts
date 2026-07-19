import type { FieldConfig, FormConfig } from '@form-os/core';

export interface SvelteAdapterOptions {
  components?: Record<string, unknown>;
}

export function createSvelteAdapter(
  config: FieldConfig[] | FormConfig,
  options: SvelteAdapterOptions = {}
) {
  throw new Error('@form-os/svelte adapter is a stub and not yet implemented.');
}
