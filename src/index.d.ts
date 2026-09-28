export interface FlattenOptions { delimiter?: string; preserveEmpty?: boolean; }
export function flattenObject(input: Record<string, unknown>, options?: FlattenOptions): Record<string, unknown>;

