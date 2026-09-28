export function flattenObject(input, options = {}) {
  if (input === null || typeof input !== "object" || Array.isArray(input)) {
    throw new TypeError("Expected input to be a non-null object");
  }
  const { delimiter = ".", preserveEmpty = true } = options;
  if (typeof delimiter !== "string" || delimiter.length === 0) throw new TypeError("Expected delimiter to be a non-empty string");
  const out = {};
  const walk = (value, path) => {
    if (value !== null && typeof value === "object") {
      const entries = Array.isArray(value) ? value.map((v,i)=>[String(i),v]) : Object.entries(value);
      if (entries.length === 0 && preserveEmpty && path) out[path] = Array.isArray(value) ? [] : {};
      for (const [key, child] of entries) walk(child, path ? `${path}${delimiter}${key}` : key);
    } else {
      out[path] = value;
    }
  };
  for (const [key, value] of Object.entries(input)) walk(value, key);
  return out;
}
