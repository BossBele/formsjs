import { FieldConfig, FormConfig } from '@jsforms/core';

interface SvelteAdapterOptions {
    components?: Record<string, unknown>;
}
declare function createSvelteAdapter(config: FieldConfig[] | FormConfig, options?: SvelteAdapterOptions): void;

export { type SvelteAdapterOptions, createSvelteAdapter };
