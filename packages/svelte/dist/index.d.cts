import { FieldConfig, FormConfig } from '@formsjs/core';

interface SvelteAdapterOptions {
    components?: Record<string, unknown>;
}
declare function createSvelteAdapter(config: FieldConfig[] | FormConfig, options?: SvelteAdapterOptions): void;

export { type SvelteAdapterOptions, createSvelteAdapter };
