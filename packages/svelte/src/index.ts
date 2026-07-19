import type { FieldConfig, FormConfig } from '@jsforms/core';

export interface SvelteAdapterOptions {
  components?: Record<string, unknown>;
}

export function createSvelteAdapter(
  config: FieldConfig[] | FormConfig,
  options: SvelteAdapterOptions = {}
) {
  throw new Error('@jsforms/svelte adapter is a stub and not yet implemented.');
}
