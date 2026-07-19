import type { FieldConfig, FormConfig } from '@formsjs/core';

export interface SvelteAdapterOptions {
  components?: Record<string, unknown>;
}

export function createSvelteAdapter(
  config: FieldConfig[] | FormConfig,
  options: SvelteAdapterOptions = {}
) {
  throw new Error('@formsjs/svelte adapter is a stub and not yet implemented.');
}
