import { FieldConfig, FormConfig } from '@form-os/core';

interface SvelteAdapterOptions {
    components?: Record<string, unknown>;
}
declare function createSvelteAdapter(config: FieldConfig[] | FormConfig, options?: SvelteAdapterOptions): void;

export { type SvelteAdapterOptions, createSvelteAdapter };
